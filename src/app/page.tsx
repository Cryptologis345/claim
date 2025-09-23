"use client";

import Image from "next/image";
import Navbar from "./navbar/page";
import image1 from "../images/Home/elliptic(1).png";
import image2 from "../images/Home/layerzero(1).png";
import image3 from "../images/Home/hypernative.png";
import image4 from "../images/Home/googlecloud(1).png";
import image5 from "../images/Home/ankr(1).png";
import image6 from "../images/Home/arkham(1).png";
import image7 from "../images/Home/hextrust(1).png";
import image13 from "../images/code.png";
import logo from "../images/Home/Screenshot_2025-07-22_215836-removebg-preview.png";
import CarouselPlugin from "./carousel";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTelegram,
  FaXbox,
  FaYoutube,
} from "react-icons/fa";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const runtime = "edge";
export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <Image
          src={logo}
          alt="Flare Logo"
          priority
          className="mx-auto w-28 md:w-40"
        />
        <h1 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight">
          Powering the{" "}
          <span className="text-[#C1003F]">Future of Blockchain</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Scalable. Secure. Global. Flare enables decentralized finance, NFTs,
          and next-gen digital transactions for everyone.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="./claim">
            <Button className="rounded-xl px-6 py-3 text-lg bg-[#C1003F] text-white hover:bg-[#a00035]">
              Claim Flare
            </Button>
          </Link>
          <Button
            variant="outline"
            className="rounded-xl px-6 py-3 text-lg border-[#C1003F] text-[#C1003F] hover:bg-[#C1003F]/10"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50 border-y">
        <p className="text-center text-gray-500 text-sm sm:text-base tracking-widest">
          TRUSTED BY INNOVATORS
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-10 items-center">
          {[image1, image2, image3, image4, image5, image6, image7].map(
            (img, idx) => (
              <Image
                key={idx}
                src={img}
                className="mx-auto w-28 sm:w-32 opacity-80 hover:opacity-100 transition"
                alt=""
              />
            )
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Why Flare?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Sparkles,
              title: "Scalable",
              desc: "Millions of transactions per second with near-zero fees.",
            },
            {
              icon: ShieldCheck,
              title: "Secure",
              desc: "Enterprise-grade encryption and decentralized consensus.",
            },
            {
              icon: Zap,
              title: "Fast",
              desc: "Lightning-fast transactions and instant settlements worldwide.",
            },
          ].map((f, i) => (
            <Card
              key={i}
              className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <CardContent className="p-10 text-center">
                <f.icon className="w-12 h-12 mx-auto text-[#C1003F]" />
                <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Carousel */}
      <CarouselPlugin />

      {/* Use Cases */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          {
            title: "DeFi",
            desc: "High-performance decentralized finance with ultra-low fees.",
          },
          {
            title: "NFTs",
            desc: "A reliable NFT ecosystem for creators and collectors.",
          },
          {
            title: "Payments",
            desc: "Instant, seamless, and secure payments worldwide.",
          },
        ].map((c, i) => (
          <div
            key={i}
            className="rounded-2xl p-10 bg-gradient-to-br from-[#C1003F]/10 to-white border hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-[#C1003F]">{c.title}</h3>
            <p className="text-gray-600 mt-3">{c.desc}</p>
          </div>
        ))}
      </section>

      {/* Build on Flare */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Build on Flare</h2>
            <p className="text-gray-600 text-lg">
              Use Flare’s full-stack data solutions to power your decentralized
              apps.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#C1003F] hover:bg-[#a00035] px-6 py-3 rounded-xl text-white">
                Developer Resources
              </Button>
              <Button
                variant="outline"
                className="border px-6 py-3 rounded-xl hover:bg-gray-100"
              >
                Learn More
              </Button>
            </div>
          </div>
          <Image src={image13} className="w-full md:w-[30em]" alt="" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-[#C1003F]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Join our community to get the latest news, product updates, and
            event info.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-xl border focus:outline-none flex-1"
            />
            <Button className="px-6 py-3 rounded-xl bg-[#C1003F] text-white hover:bg-[#a00035]">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src={logo} alt="" className="w-10" />
              <p className="text-xl font-semibold text-white">flare</p>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Flare. All rights reserved.
            </p>
            <div className="flex space-x-5">
              {[
                FaGithub,
                FaYoutube,
                FaLinkedin,
                FaDiscord,
                FaXbox,
                FaMedium,
                FaTelegram,
              ].map((Icon, i) => (
                <Icon
                  key={i}
                  size={20}
                  className="hover:text-[#C1003F] cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-3">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://flarescan.com/">Flarescan</Link>
                </li>
                <li>
                  <Link href="https://portal.flare.network/">Flare Portal</Link>
                </li>
                <li>
                  <Link href="https://flare-systems-explorer.flare.network/">
                    System Explorer
                  </Link>
                </li>
                <li>
                  <Link href="https://dev.flare.network/">Developer Hub</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://flare.network/resources/grants">
                    Grants
                  </Link>
                </li>
                <li>
                  <Link href="https://flare.network/careers">Careers</Link>
                </li>
                <li>
                  <Link href="https://flare.network/sign-up">Newsletter</Link>
                </li>
                <li>
                  <Link href="https://dev.flare.network/support/flr/">
                    Whitepapers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
