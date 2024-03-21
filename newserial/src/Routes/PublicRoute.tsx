import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../api";
import { setToken } from "../redux/modules/auth";
import { useQuery } from "@tanstack/react-query";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

/**
 * 비로그인 상태에서만 특정 페이지에 접근 가능
 * @author 신정은
 */
const PublicRoute = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  /**
   * refresh Token이 유효하면 accessToken 발급하는 api 호출
   */
  const refreshLogin = async () => {
    const { data } = await api.get(`/reissue`, {
      withCredentials: true,
    });

    if (data) dispatch(setToken(data.accessToken));
  };

  const { isLoading } = useQuery({
    queryKey: ["refresh-login"],
    queryFn: refreshLogin,
    enabled: accessToken === null,
  });

  //logout한 상태
  if (accessToken === "") return <Outlet />;
  else if (accessToken !== null) return <Navigate to={"/"} />;
  if (isLoading) return null;

  return accessToken !== null ? (
    <Navigate to={"/"} />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
