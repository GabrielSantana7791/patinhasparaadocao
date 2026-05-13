"use client";

import HomePetCard from "@/src/components/homePetCard/HomePetCard";
import { useEffect, useState } from "react";
import Loading from "@/src/components/loading/Loading";
import { useFetchPets } from "@/src/hooks/firebase";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | undefined>(undefined);
  const { data: petsData, exec: fetchPetsExec } = useFetchPets();

  useEffect(() => {
    if (!params) return;
    const getParams = async () => {
      const { id } = await params;
      setId(id);
    };
    getParams();
  }, [params]);

  useEffect(() => {
    if (!id) return;
    fetchPetsExec(1, { id });
  }, [id]);

  return (
    <>
      {!petsData && <Loading />}
      {petsData && <HomePetCard pet={petsData.pets[0]} />}
    </>
  );
}
