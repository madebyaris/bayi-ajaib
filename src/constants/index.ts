// Application constants
export const APP_NAME = 'Recruitment Company';
export const APP_DESCRIPTION = 'Professional recruitment agency specializing in executive search and talent acquisition';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// API constants
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';
export const API_TIMEOUT = 30000; // 30 seconds

// Pagination constants
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;
export const PAGINATION_SIZES = [10, 25, 50, 100];

// File upload constants
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'image/jpeg',
  'image/png',
  'image/gif',
];

export const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
];

// Validation constants
export const MIN_PASSWORD_LENGTH = 8;
export const MAX_PASSWORD_LENGTH = 128;
export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 100;
export const MIN_BIO_LENGTH = 10;
export const MAX_BIO_LENGTH = 1000;

// Date constants
export const DATE_FORMAT = 'dd/MM/yyyy';
export const DATETIME_FORMAT = 'dd/MM/yyyy HH:mm';
export const TIME_FORMAT = 'HH:mm';

// Currency constants
export const DEFAULT_CURRENCY = 'IDR';
export const CURRENCY_SYMBOL = 'Rp';
export const CURRENCY_DECIMAL_PLACES = 0;

// Job constants
export const JOB_TYPES = [
  { value: 'FULL_TIME', label: 'Full Time' },
  { value: 'PART_TIME', label: 'Part Time' },
  { value: 'CONTRACT', label: 'Contract' },
  { value: 'INTERNSHIP', label: 'Internship' },
  { value: 'FREELANCE', label: 'Freelance' },
] as const;

export const JOB_LEVELS = [
  { value: 'ENTRY', label: 'Entry Level' },
  { value: 'JUNIOR', label: 'Junior' },
  { value: 'MID', label: 'Mid Level' },
  { value: 'SENIOR', label: 'Senior Level' },
  { value: 'LEAD', label: 'Lead' },
  { value: 'EXECUTIVE', label: 'Executive' },
] as const;

export const JOB_STATUSES = [
  { value: 'DRAFT', label: 'Draft', color: 'gray' },
  { value: 'PUBLISHED', label: 'Published', color: 'green' },
  { value: 'PAUSED', label: 'Paused', color: 'yellow' },
  { value: 'CLOSED', label: 'Closed', color: 'red' },
  { value: 'FILLED', label: 'Filled', color: 'blue' },
] as const;

// Application status constants
export const APPLICATION_STATUSES = [
  { value: 'PENDING', label: 'Pending', color: 'gray' },
  { value: 'REVIEWED', label: 'Reviewed', color: 'blue' },
  { value: 'SHORTLISTED', label: 'Shortlisted', color: 'yellow' },
  { value: 'INTERVIEWED', label: 'Interviewed', color: 'purple' },
  { value: 'OFFERED', label: 'Offered', color: 'green' },
  { value: 'REJECTED', label: 'Rejected', color: 'red' },
  { value: 'WITHDRAWN', label: 'Withdrawn', color: 'gray' },
] as const;

// User role constants
export const USER_ROLES = [
  { value: 'ADMIN', label: 'Admin', description: 'Full system access' },
  { value: 'STAFF', label: 'Staff', description: 'Recruitment team member' },
  { value: 'CLIENT', label: 'Client', description: 'Company representative' },
  { value: 'CANDIDATE', label: 'Candidate', description: 'Job seeker' },
] as const;

// Company size constants
export const COMPANY_SIZES = [
  { value: 'STARTUP', label: 'Startup (1-10 employees)' },
  { value: 'SMALL', label: 'Small (11-50 employees)' },
  { value: 'MEDIUM', label: 'Medium (51-200 employees)' },
  { value: 'LARGE', label: 'Large (201-1000 employees)' },
  { value: 'ENTERPRISE', label: 'Enterprise (1000+ employees)' },
] as const;

// Service category constants
export const SERVICE_CATEGORIES = [
  { value: 'EXECUTIVE_SEARCH', label: 'Executive Search' },
  { value: 'RPO', label: 'Recruitment Process Outsourcing' },
  { value: 'MASS_HIRING', label: 'Mass Hiring' },
  { value: 'EOR', label: 'Employer of Record' },
  { value: 'CONSULTING', label: 'Consulting' },
] as const;

// Skill category constants
export const SKILL_CATEGORIES = [
  { value: 'TECHNICAL', label: 'Technical Skills' },
  { value: 'SOFT', label: 'Soft Skills' },
  { value: 'LANGUAGE', label: 'Languages' },
  { value: 'CERTIFICATION', label: 'Certifications' },
  { value: 'OTHER', label: 'Other' },
] as const;

export const SKILL_LEVELS = [
  { value: 'BEGINNER', label: 'Beginner' },
  { value: 'INTERMEDIATE', label: 'Intermediate' },
  { value: 'ADVANCED', label: 'Advanced' },
  { value: 'EXPERT', label: 'Expert' },
] as const;

// Language proficiency constants
export const LANGUAGE_PROFICIENCIES = [
  { value: 'BEGINNER', label: 'Beginner' },
  { value: 'INTERMEDIATE', label: 'Intermediate' },
  { value: 'ADVANCED', label: 'Advanced' },
  { value: 'FLUENT', label: 'Fluent' },
  { value: 'NATIVE', label: 'Native' },
] as const;

// Industry constants
export const INDUSTRIES = [
  'Technology',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Retail',
  'Education',
  'Construction',
  'Energy',
  'Transportation',
  'Real Estate',
  'Consulting',
  'Media',
  'Government',
  'Non-profit',
  'Other',
] as const;

// Location constants
export const INDONESIAN_CITIES = [
  'Jakarta',
  'Surabaya',
  'Bandung',
  'Medan',
  'Semarang',
  'Makassar',
  'Palembang',
  'Tangerang',
  'Depok',
  'Bekasi',
  'Yogyakarta',
  'Malang',
  'Solo',
  'Batam',
  'Pekanbaru',
  'Padang',
  'Denpasar',
  'Balikpapan',
  'Samarinda',
  'Pontianak',
  'Manado',
  'Mataram',
  'Kupang',
  'Jayapura',
  'Other',
] as const;

// Notification constants
export const NOTIFICATION_TYPES = [
  { value: 'JOB_APPLICATION', label: 'Job Application' },
  { value: 'JOB_MATCH', label: 'Job Match' },
  { value: 'INTERVIEW_SCHEDULED', label: 'Interview Scheduled' },
  { value: 'STATUS_UPDATE', label: 'Status Update' },
  { value: 'MESSAGE', label: 'Message' },
  { value: 'SYSTEM', label: 'System' },
] as const;

// Theme constants
export const THEMES = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
] as const;

// Color constants
export const COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  success: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
} as const;

// Breakpoint constants
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Animation constants
export const ANIMATIONS = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Storage constants
export const STORAGE_KEYS = {
  THEME: 'theme',
  LANGUAGE: 'language',
  USER_PREFERENCES: 'userPreferences',
  FORM_DATA: 'formData',
  RECENT_SEARCHES: 'recentSearches',
  NOTIFICATIONS: 'notifications',
} as const;

// API endpoint constants
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  USERS: {
    LIST: '/users',
    CREATE: '/users',
    GET: '/users/:id',
    UPDATE: '/users/:id',
    DELETE: '/users/:id',
    PROFILE: '/users/profile',
  },
  JOBS: {
    LIST: '/jobs',
    CREATE: '/jobs',
    GET: '/jobs/:id',
    UPDATE: '/jobs/:id',
    DELETE: '/jobs/:id',
    APPLY: '/jobs/:id/apply',
    APPLICATIONS: '/jobs/:id/applications',
  },
  CANDIDATES: {
    LIST: '/candidates',
    CREATE: '/candidates',
    GET: '/candidates/:id',
    UPDATE: '/candidates/:id',
    DELETE: '/candidates/:id',
    PROFILE: '/candidates/profile',
  },
  COMPANIES: {
    LIST: '/companies',
    CREATE: '/companies',
    GET: '/companies/:id',
    UPDATE: '/companies/:id',
    DELETE: '/companies/:id',
  },
  APPLICATIONS: {
    LIST: '/applications',
    GET: '/applications/:id',
    UPDATE: '/applications/:id',
    DELETE: '/applications/:id',
  },
  UPLOAD: {
    FILE: '/upload/file',
    IMAGE: '/upload/image',
    DOCUMENT: '/upload/document',
  },
} as const;

// Error message constants
export const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  PASSWORD_TOO_SHORT: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
  PASSWORD_TOO_LONG: `Password must be no more than ${MAX_PASSWORD_LENGTH} characters`,
  PASSWORDS_DO_NOT_MATCH: 'Passwords do not match',
  FILE_TOO_LARGE: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB`,
  INVALID_FILE_TYPE: 'Invalid file type',
  NETWORK_ERROR: 'Network error. Please try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  FORBIDDEN: 'Access denied',
  NOT_FOUND: 'Resource not found',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again',
} as const;

// Success message constants
export const SUCCESS_MESSAGES = {
  PROFILE_UPDATED: 'Profile updated successfully',
  PASSWORD_CHANGED: 'Password changed successfully',
  APPLICATION_SUBMITTED: 'Application submitted successfully',
  JOB_POSTED: 'Job posted successfully',
  CANDIDATE_ADDED: 'Candidate added successfully',
  COMPANY_ADDED: 'Company added successfully',
  FILE_UPLOADED: 'File uploaded successfully',
  SETTINGS_SAVED: 'Settings saved successfully',
  NOTIFICATION_SENT: 'Notification sent successfully',
} as const;

// Regex patterns
export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^(\+62|62|0)[0-9]{9,13}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  URL: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
} as const;
