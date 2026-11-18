/**
 * Logix Software House - TypeScript Type Definitions
 */

export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Hybrid';
export type JobDepartment = 'Engineering' | 'Design' | 'AI & ML' | 'Product' | 'Quality Assurance' | 'DevOps & Cloud';
export type ApplicationStatus = 'New' | 'Under Review' | 'Shortlisted' | 'Interviewed' | 'Rejected' | 'Hired';
export type EmployeeStatus = 'Active' | 'On Leave' | 'Probation' | 'Terminated';

export interface Job {
  id: string;
  title: string;
  department: JobDepartment;
  location: string;
  type: JobType;
  experience: string;
  salary: string;
  postedDate: string;
  tags: string[];
  isFeatured?: boolean;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: JobDepartment | 'HR & Ops' | 'Executive';
  email: string;
  phone: string;
  joinDate: string;
  status: EmployeeStatus;
  avatar: string;
  skills: string[];
  salary?: string;
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  applicantName: string;
  email: string;
  phone: string;
  experience: string;
  skills: string;
  portfolioUrl?: string;
  cvFileName: string;
  appliedDate: string;
  status: ApplicationStatus;
  coverNote?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  service: string;
  message: string;
  date: string;
}
