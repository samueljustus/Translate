"use client";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";

export default function Header() {
  console.log("Header component rendered");
  return (
    <header className="flex justify-between px-5 items-center">
      <h1>
        Trans<span>late.</span>
      </h1>
      <Link
        href=""
        className={buttonVariants({ variant: "outline" }) + " text-center"}
      >
        Sign In
      </Link>
    </header>
  );
}
