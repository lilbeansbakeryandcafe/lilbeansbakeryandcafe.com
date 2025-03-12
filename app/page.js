"use client";

import Image from 'next/image';
import ourStory from "./static/our-story.png";
import Footer from './components/footer';
import Navbar from './components/navbar';
import QRCode from './components/qrcode';

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50">
      <Navbar />
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 bg-white border-b border-zinc-100">
        <div className='max-w-xl mx-auto text-center mb-8'>
          <h1 className='text-4xl text-center mb-4'>Let us know your thoughts!</h1>
          <p className='text-zinc-500'>Scan the QR code to look at our latest Google Forms survey.</p>
        </div>
        <div className='grid place-items-center'>
          <QRCode
            className='border-4 rounded'
            size={128}
            value={"https://docs.google.com/forms/d/e/1FAIpQLScN8m_ziyphwTGgo1DecEC-urEa3za_sk3jbBZVQ1su2bra9g/viewform?usp=header"}
          />
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="border-zinc-300 border max-w-5xl bg-white shadow-xl rounded-xl overflow-hidden mx-auto p-4">
          <h2 className="text-3xl mb-6 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className='text-zinc-800'>
              <p className="mb-4 text-brown-700">
                Since 2013, we’ve had the joy of bringing our beloved baked goods to the vibrant farmers' markets around Atlanta, Georgia.
              </p>
              <p className="mb-4 text-brown-700">
                As we set up our booth, we were able to connect with customers and offer a taste of Black culinary history. Whether it was a first-time customer or a returning regular, each bite of Navy Bean Pie sparked conversation, reminding us all of the deep-rooted traditions of family gatherings, community events, and celebrations that food has always played a part in.
              </p>
              <p className="mb-4 text-brown-700">
                Our participation in these community-centered markets allowed us to connect directly with our neighbors, share our passion for baking, and introduce our signature items—like the Navy Bean Pie and freshly baked treats—to a diverse and appreciative audience.
              </p>
            </div>
            <div className="relative border-zinc-300 border rounded-lg overflow-hidden h-64 md:h-80">
              <Image
                src={ourStory}
                alt="The founders of Lil Beans Bakery"
                fill
                priority
                quality={50}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}