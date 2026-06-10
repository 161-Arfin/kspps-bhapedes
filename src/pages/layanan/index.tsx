import React from "react";
import LayananView from "@/views/layanan";

export const getServerSideProps = async () => {
  return {
    notFound: true,
  };
};

export default function LayananPage() {
  return <LayananView />;
}
