"use client";

import Hero from "@/ui/Hero";
import Projects from "@/ui/Projects";
import Footer from "@/ui/Footer";
import { useState } from "react";
import { fetchPerson } from "@/api/mockApi";
import { PersonModule } from "@faker-js/faker";

export default function Home() {
  const [person, setPerson] = useState<PersonModule>();
  const [isLoading, setIsLoading] = useState(false);

  const handleViewMyWork = () => {
    setIsLoading(true);
    setPerson(undefined);
    (async function () {
      const data = await fetchPerson();
      console.log(`after loading...`, data);
      setIsLoading(false);
      setPerson(data);
    })();
  };
  return (
    <div className="min-h-screen">
      <Hero handleViewMyWork={handleViewMyWork} />

      <Projects isLoading={isLoading} person={person} />

      <Footer />
    </div>
  );
}
