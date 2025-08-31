/**
 * PII Paladin Lite - Fast, lightweight PII stripper for browser use
 * 
 * Usage:
 * import { stripPII } from 'pii-paladin-lite';
 * const clean = stripPII("Contact John at john@email.com");
 */

// Optimized regex patterns for common PII types
const PII_PATTERNS = [
  // Email addresses
  { pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, replacement: '[EMAIL]' },
  
  // Phone numbers (US and international formats)
  { pattern: /(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/g, replacement: '[PHONE]' },
  
  // Social Security Numbers (US)
  { pattern: /\b\d{3}-\d{2}-\d{4}\b|\b\d{9}\b/g, replacement: '[SSN]' },
  
  // Credit Card Numbers (major formats)
  { pattern: /\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3[0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})\b|\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g, replacement: '[CREDIT_CARD]' },
  
  // IP Addresses
  { pattern: /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/g, replacement: '[IP_ADDRESS]' },
  
  // URLs
  { pattern: /\bhttps?:\/\/[^\s]+/g, replacement: '[URL]' },
  
  // MAC Addresses
  { pattern: /\b([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})\b/g, replacement: '[MAC_ADDRESS]' },
  
  // Driver's License (common US formats)
  { pattern: /\b[A-Z]{1,2}[0-9]{6,8}\b/g, replacement: '[DRIVER_LICENSE]' },
  
  // Passport Numbers (US format)
  { pattern: /\b[A-Z]{1,2}[0-9]{6,9}\b/g, replacement: '[PASSPORT]' },
  
  // Bank Account Numbers (generic pattern)
  { pattern: /\b\d{8,17}\b/g, replacement: '[ACCOUNT_NUMBER]' },
  
  // Date of Birth patterns (MM/DD/YYYY, YYYY-MM-DD)
  { pattern: /\b(0[1-9]|1[0-2])[\/\-](0[1-9]|[12]\d|3[01])[\/\-](19|20)\d{2}\b|\b(19|20)\d{2}[\/\-](0[1-9]|1[0-2])[\/\-](0[1-9]|[12]\d|3[01])\b/g, replacement: '[DATE_OF_BIRTH]' },
  
  // Street Addresses (common patterns)
  { pattern: /\b\d+\s+[A-Za-z\s]+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Drive|Dr|Lane|Ln|Way|Court|Ct|Place|Pl|Circle|Cir)\b/gi, replacement: '[ADDRESS]' },
  
  // ZIP Codes (US)
  { pattern: /\b\d{5}(?:-\d{4})?\b/g, replacement: '[ZIP_CODE]' },
  
  // Names (common patterns - more conservative to avoid false positives)
  { pattern: /\b(?:Mr\.|Mrs\.|Ms\.|Dr\.|Prof\.)\s+[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, replacement: '[NAME]' },
  
  // Company names with common suffixes
  { pattern: /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\s+(?:Inc|Corp|LLC|Ltd|Company|Co|Corporation|Limited)\b/g, replacement: '[COMPANY]' }
];

/**
 * Strips Personally Identifiable Information (PII) from a string
 * @param text - The input text to process
 * @returns The text with PII replaced by placeholders
 */
export function stripPII(text: string): string {
  if (typeof text !== 'string') {
    throw new Error('Input must be a string');
  }
  
  if (!text.trim()) {
    return text;
  }
  
  let result = text;
  
  // Apply all patterns in sequence
  for (const { pattern, replacement } of PII_PATTERNS) {
    result = result.replace(pattern, replacement);
  }
  
  return result;
}

// Default export for convenience
export default stripPII;
