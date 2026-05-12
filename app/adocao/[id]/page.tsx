"use client";

import { PET_LIST_EXAMPLE } from "@/src/utils/petListExample";
import HomePetCard from "@/src/components/HomePetCard/HomePetCard";
import { useEffect, useState } from "react";
import Loading from "@/src/components/loading/Loading";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!params) return;
    const getParams = async () => {
      const { id } = await params;
      setId(Number(id));
    };
    getParams();
  }, [params]);

  return (
    <>
      {!id && <Loading />}
      {id && <HomePetCard pet={PET_LIST_EXAMPLE[id]} />}
    </>
  );
}
