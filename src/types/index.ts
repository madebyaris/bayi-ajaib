// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  company?: string;
  position?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}

export type UserRole = 'ADMIN' | 'STAFF' | 'CLIENT' | 'CANDIDATE';

// Company types
export interface Company {
  id: string;
  name: string;
  industry: string;
  size: CompanySize;
  website?: string;
  description?: string;
  logo?: string;
  address: Address;
  contact: ContactInfo;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CompanySize = 'STARTUP' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'ENTERPRISE';

// Job types
export interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  location: string;
  type: JobType;
  level: JobLevel;
  salary: SalaryRange;
  company: Company;
  status: JobStatus;
  postedBy: User;
  applications: JobApplication[];
  tags: string[];
  isRemote: boolean;
  isUrgent: boolean;
  deadline?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type JobType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP' | 'FREELANCE';
export type JobLevel = 'ENTRY' | 'JUNIOR' | 'MID' | 'SENIOR' | 'LEAD' | 'EXECUTIVE';
export type JobStatus = 'DRAFT' | 'PUBLISHED' | 'PAUSED' | 'CLOSED' | 'FILLED';

export interface SalaryRange {
  min: number;
  max: number;
  currency: string;
  period: 'HOUR' | 'DAY' | 'MONTH' | 'YEAR';
}

// Application types
export interface JobApplication {
  id: string;
  job: Job;
  candidate: Candidate;
  status: ApplicationStatus;
  coverLetter?: string;
  resume: string;
  portfolio?: string;
  expectedSalary?: number;
  availability?: Date;
  notes?: string;
  appliedAt: Date;
  updatedAt: Date;
}

export type ApplicationStatus = 'PENDING' | 'REVIEWED' | 'SHORTLISTED' | 'INTERVIEWED' | 'OFFERED' | 'REJECTED' | 'WITHDRAWN';

// Candidate types
export interface Candidate {
  id: string;
  user: User;
  profile: CandidateProfile;
  skills: Skill[];
  experience: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  availability: Availability;
  preferences: CandidatePreferences;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CandidateProfile {
  bio?: string;
  headline?: string;
  summary?: string;
  yearsOfExperience: number;
  currentPosition?: string;
  currentCompany?: string;
  location: string;
  willingToRelocate: boolean;
  portfolio?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  gpa?: number;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Language {
  name: string;
  proficiency: LanguageProficiency;
  isNative: boolean;
}

export type LanguageProficiency = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'FLUENT' | 'NATIVE';

export interface Availability {
  isAvailable: boolean;
  startDate?: Date;
  noticePeriod: number; // in days
  preferredSchedule: JobType[];
  timezone: string;
}

export interface CandidatePreferences {
  desiredSalary: SalaryRange;
  preferredLocations: string[];
  preferredJobTypes: JobType[];
  preferredIndustries: string[];
  remoteWork: boolean;
  travelWillingness: boolean;
}

// Skill types
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  yearsOfExperience: number;
  lastUsed?: Date;
  isVerified: boolean;
}

export type SkillCategory = 'TECHNICAL' | 'SOFT' | 'LANGUAGE' | 'CERTIFICATION' | 'OTHER';
export type SkillLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';

// Service types
export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  features: string[];
  pricing: Pricing;
  duration: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ServiceCategory = 'EXECUTIVE_SEARCH' | 'RPO' | 'MASS_HIRING' | 'EOR' | 'CONSULTING';

export interface Pricing {
  type: 'FIXED' | 'PERCENTAGE' | 'HOURLY' | 'CUSTOM';
  amount?: number;
  currency: string;
  description?: string;
}

// Contact types
export interface ContactInfo {
  email: string;
  phone: string;
  website?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  position?: string;
  service: ServiceCategory;
  message: string;
  budget?: number;
  timeline?: string;
  preferredContact: 'EMAIL' | 'PHONE' | 'WHATSAPP';
}

export interface JobApplicationFormData {
  jobId: string;
  candidateId: string;
  coverLetter: string;
  resume: File;
  portfolio?: File;
  expectedSalary?: number;
  availability?: Date;
  notes?: string;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  pagination?: Pagination;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, unknown>;
  field?: string;
}

// Filter and search types
export interface JobFilters {
  search?: string;
  location?: string;
  type?: JobType[];
  level?: JobLevel[];
  salaryMin?: number;
  salaryMax?: number;
  isRemote?: boolean;
  isUrgent?: boolean;
  tags?: string[];
  company?: string;
  postedAfter?: Date;
  postedBefore?: Date;
}

export interface CandidateFilters {
  search?: string;
  location?: string;
  skills?: string[];
  experience?: {
    min: number;
    max: number;
  };
  availability?: boolean;
  salaryRange?: {
    min: number;
    max: number;
  };
  education?: string[];
  languages?: string[];
}

// Statistics types
export interface DashboardStats {
  totalJobs: number;
  activeJobs: number;
  totalCandidates: number;
  activeCandidates: number;
  totalApplications: number;
  pendingApplications: number;
  totalCompanies: number;
  activeCompanies: number;
  placementsThisMonth: number;
  placementsThisYear: number;
  averageTimeToHire: number;
  successRate: number;
}

export interface JobStats {
  totalViews: number;
  totalApplications: number;
  shortlistedCount: number;
  interviewedCount: number;
  offeredCount: number;
  hiredCount: number;
  averageTimeToFill: number;
  sourceBreakdown: Record<string, number>;
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: Record<string, unknown>;
  isRead: boolean;
  createdAt: Date;
}

export type NotificationType = 'JOB_APPLICATION' | 'JOB_MATCH' | 'INTERVIEW_SCHEDULED' | 'STATUS_UPDATE' | 'MESSAGE' | 'SYSTEM';

// File types
export interface FileUpload {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  uploadedBy: string;
  uploadedAt: Date;
}

// Settings types
export interface AppSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: Address;
  socialMedia: ContactInfo;
  features: {
    jobBoard: boolean;
    candidatePortal: boolean;
    companyPortal: boolean;
    analytics: boolean;
    notifications: boolean;
  };
  email: {
    smtpHost: string;
    smtpPort: number;
    smtpUser: string;
    smtpPassword: string;
    fromEmail: string;
    fromName: string;
  };
  storage: {
    provider: 'LOCAL' | 'AWS_S3' | 'CLOUDINARY';
    config: Record<string, unknown>;
  };
}

// Validation types
export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Search types
export interface SearchResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
  filters: Record<string, unknown>;
  suggestions?: string[];
}

// Analytics types
export interface AnalyticsEvent {
  id: string;
  userId?: string;
  sessionId: string;
  event: string;
  category: string;
  properties: Record<string, unknown>;
  timestamp: Date;
  page: string;
  referrer?: string;
  userAgent: string;
  ip?: string;
}

// Audit types
export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resource: string;
  resourceId: string;
  changes: Record<string, { from: unknown; to: unknown }>;
  ip?: string;
  userAgent?: string;
  timestamp: Date;
}
