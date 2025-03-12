'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const QRCode = ({ 
  value = 'https://nextjs.org', 
  size = 200,
  bgColor = '#FFFFFF',
  fgColor = '#000000', // Default to indigo instead of black
  level = 'H', // High error correction for better style compatibility
  includeMargin = true,
  className = '',
  style = 'standard', // 'standard', 'rounded', 'gradient', 'dotted', 'custom'
  cornerRadius = 8, // For rounded style
  customStyles = {}, // For advanced customization
  cornerDotColor = '', // Optional special color for corner dots
  logo = null, // Optional logo to place in center
  logoSize = 50, // Size of the logo
}) => {
  const [qrCodeURL, setQrCodeURL] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [finalSvg, setFinalSvg] = useState('');

  useEffect(() => {
    const generateQR = async () => {
      try {
        setIsLoading(true);
        const QRCodeLib = await import('qrcode');
        
        // First generate standard QR code to SVG
        const svgString = await new Promise((resolve, reject) => {
          QRCodeLib.toString(value, {
            type: 'svg',
            width: size,
            margin: includeMargin ? 4 : 0,
            errorCorrectionLevel: level,
            color: {
              dark: fgColor,
              light: bgColor
            }
          }, (err, data) => {
            if (err) reject(err);
            else resolve(data);
          });
        });
        
        // Now process the SVG for styling
        let enhancedSvg = svgString;

        if (style === 'rounded') {
          // Replace rectangles with rounded rects
          enhancedSvg = enhancedSvg.replace(
            /<rect([^>]*)\/>/g, 
            `<rect$1 rx="${cornerRadius}" ry="${cornerRadius}"/>`
          );
        } 
        else if (style === 'gradient') {
          // Add gradient
          const gradientId = 'qrGradient';
          const gradientDef = `
            <defs>
              <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="${gradientColors[0]}" />
                <stop offset="100%" stop-color="${gradientColors[1]}" />
              </linearGradient>
            </defs>
          `;
          
          // Insert gradient def and update fill color
          enhancedSvg = enhancedSvg.replace(
            /<svg([^>]*)>/, 
            `<svg$1>${gradientDef}`
          ).replace(
            new RegExp(`fill="${fgColor}"`, 'g'),
            `fill="url(#${gradientId})"`
          );
        }
        else if (style === 'dotted') {
          // Replace rectangles with circles
          enhancedSvg = enhancedSvg.replace(
            /<rect([^>]*) width="([^"]*)" height="([^"]*)" x="([^"]*)" y="([^"]*)"([^>]*)\/>/g,
            (match, p1, width, height, x, y, p6) => {
              const centerX = parseFloat(x) + parseFloat(width) / 2;
              const centerY = parseFloat(y) + parseFloat(height) / 2;
              const radius = Math.min(parseFloat(width), parseFloat(height)) / 2 * 0.85; // Slightly smaller for spacing
              return `<circle cx="${centerX}" cy="${centerY}" r="${radius}"${p6}/>`;
            }
          );
          
          // Special color for corner finder patterns if specified
          if (cornerDotColor) {
            // This is a simplification - in a real component you'd need more sophisticated 
            // detection of the finder patterns
            // For demo purposes, we'd highlight the first 3 large square patterns
          }
        }
        
        // Convert to data URL for display
        const blob = new Blob([enhancedSvg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        setQrCodeURL(url);
        setFinalSvg(enhancedSvg);
        
        // Clean up object URL on unmount
        return () => URL.revokeObjectURL(url);
      } catch (err) {
        console.error('Error generating QR code:', err);
      } finally {
        setIsLoading(false);
      }
    };

    generateQR();
  }, []);

  if (isLoading) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 ${className}`} 
        style={{ width: size, height: size }}
      >
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <img
        src={qrCodeURL}
        alt={`QR code for ${value}`}
        width={size}
        height={size}
        className={`${className}`}
        style={{ 
          filter: customStyles.filter || 'none',
          borderRadius: customStyles.borderRadius,
          ...customStyles
        }}
      />
      
      {/* Optional centered logo */}
      {logo && (
        <div 
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: logoSize,
            height: logoSize,
            background: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            boxShadow: '0 0 8px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={logo} 
            alt="Logo" 
            width={logoSize * 0.75} 
            height={logoSize * 0.75}
            style={{ borderRadius: '50%' }}
          />
        </div>
      )}
    </div>
  );
};

export default QRCode;