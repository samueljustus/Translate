"use client";

import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/myComponent/header";
import { FaGlobe, FaLanguage, FaPen } from "react-icons/fa";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <div className=" mt-5 bg-[#fff9f0] min-h-screen pt-5 m-3 rounded-xl border border-[#fbdea8]">
        <div className="pt-5">
          <Header />
        </div>
        <section className="px-5">
          <main className="mt-10">
            <div className="text-center">
              <h1 className=" text-3xl text-center font-bold">
                Break the Language Barrier in Seconds
              </h1>
              <p className="text-lg pt-5">
                Say goodbye to language confusion. Get fast, accurate
                translations for school, travel, work, and everything in
                between.
              </p>
            </div>
            <div className="pt-5 text-center">
              <Link
                href=""
                className={
                  buttonVariants({ variant: "outline" }) +
                  " text-center w-[100%]"
                }
              >
                start your free trial
              </Link>
            </div>
          </main>
        </section>
      </div>
      <div>
        <section className="p-5">
          <div className="text-center mt-10">
            <h1 className="text-2xl font-bold mb-5">The future of AI.</h1>
            <p>
              Our mission is to make language invisible. So you can focus on
              what really matters. communicating clearly, confidently, and
              without limits.
            </p>
          </div>
          <div className="">
            <div className="flex items-start gap-5 mt-10 mb-3 border border-[#cbe0fe] bg-[#f7f8fe] rounded-md p-5">
              <div className=" bg-[#cfdefe] rounded-lg relative top-[3px] p-3">
                <FaPen />
              </div>
              <div className="">
                <h3 className="mb-3 font-bold text-base">
                  Instant & Accurate Translations
                </h3>
                <p className="text-sm/6">
                  Get real-time translations that are fast and trustworthy. No
                  awkward delays or mistakes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 mb-3 border border-[#cbe0fe] bg-[#f7f8fe] rounded-md p-5">
              <div className=" bg-[#cfdefe] rounded-lg relative top-[3px] p-3">
                <FaLanguage />
              </div>
              <div className="">
                <h3 className="mb-3 font-bold text-base">
                  Context-Aware Language Detection
                </h3>
                <p className="text-sm/6">
                  It&apos;s not just about words. It&apos;s about meaning. Our
                  translator understands tone, slang, and context, giving you
                  translations that sound natural, not robotic.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 mb-3 border border-[#cbe0fe] bg-[#f7f8fe] rounded-md p-5">
              <div className=" bg-[#cfdefe] rounded-lg relative top-[3px] p-3">
                <FaGlobe />
              </div>
              <div className="">
                <h3 className="mb-3 font-bold text-base">
                  Built for Everyone, Everywhere
                </h3>
                <p className="text-sm/6">
                  Whether you&apos;re a student, traveler, content creator, or
                  global business, our tool adapts to your needs across 100+
                  languages, anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
          <Button variant="outline" className="w-[100%]" >Start your free trial</Button>
          </div>
        </section>
      </div>
      <div></div>
    </div>
  );
}
