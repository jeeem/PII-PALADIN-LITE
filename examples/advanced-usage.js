// PII Paladin Lite - Multiple usage examples

// Line 1: Import
import { stripPII } from 'pii-paladin-lite';

// Line 2: Basic usage
const basicClean = stripPII("Contact john@example.com at (123) 456-7890");
console.log('Basic:', basicClean);

// More examples
const examples = [
  "User: john.doe@company.com, Phone: (555) 123-4567, SSN: 123-45-6789",
  "Address: 123 Main Street, ZIP: 12345, Card: 4111-1111-1111-1111",
  "Server: 192.168.1.1, MAC: AA:BB:CC:DD:EE:FF, URL: https://example.com"
];

examples.forEach((example, index) => {
  console.log(`\nExample ${index + 1}:`);
  console.log('Original:', example);
  console.log('Cleaned:', stripPII(example));
});

// That's it! Simple and effective. 🎉
