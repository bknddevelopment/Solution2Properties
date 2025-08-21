import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { width: 140, height: 42 },
    md: { width: 180, height: 54 },
    lg: { width: 240, height: 72 },
  };

  const currentSize = sizes[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Solution 2 Properties - Home"
    >
      <Image
        src="/logo.png"
        alt="Solution 2 Properties"
        width={currentSize.width}
        height={currentSize.height}
        priority
        className="object-contain"
        style={{
          maxWidth: `${currentSize.width}px`,
          height: 'auto',
        }}
      />
    </Link>
  );
}