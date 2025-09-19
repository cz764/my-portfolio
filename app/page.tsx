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
  const [errorMessage, setErrorMessage] = useState("");

  const handleViewMyWork = () => {
    setIsLoading(true);
    setPerson(undefined);
    setErrorMessage("");
    (async function () {
      try {
        const data = await fetchPerson();
        console.log(`after loading...`, data);
        setPerson(data);
      } catch (ex) {
        console.log(ex);
        setErrorMessage(ex as string);
      } finally {
        setIsLoading(false);
      }
    })();
  };
  return (
    <div className="min-h-screen">
      <Hero handleViewMyWork={handleViewMyWork} />

      <Projects
        isLoading={isLoading}
        person={person}
        errorMessage={errorMessage}
      />

      <Footer />
    </div>
  );
}
