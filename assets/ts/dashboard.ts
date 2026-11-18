/**
 * Logix Software House - TypeScript Dashboard Implementation
 */
import { Employee, Job, Application, ApplicationStatus } from './types';

export class DashboardManager {
  private employees: Employee[] = [];
  private jobs: Job[] = [];
  private applications: Application[] = [];

  constructor() {
    this.loadState();
  }

  private loadState(): void {
    const empData = localStorage.getItem('logix_employees');
    if (empData) {
      try { this.employees = JSON.parse(empData); } catch {}
    }
    const jobData = localStorage.getItem('logix_jobs');
    if (jobData) {
      try { this.jobs = JSON.parse(jobData); } catch {}
    }
    const appData = localStorage.getItem('logix_applications');
    if (appData) {
      try { this.applications = JSON.parse(appData); } catch {}
    }
  }

  public getSummaryStats() {
    return {
      totalEmployees: this.employees.length,
      activeJobs: this.jobs.length,
      totalApplications: this.applications.length,
      hiredCount: this.applications.filter(a => a.status === 'Hired').length,
      shortlistedCount: this.applications.filter(a => a.status === 'Shortlisted').length
    };
  }

  public updateStatus(appId: string, status: ApplicationStatus): boolean {
    const target = this.applications.find(a => a.id === appId);
    if (target) {
      target.status = status;
      localStorage.setItem('logix_applications', JSON.stringify(this.applications));
      return true;
    }
    return false;
  }
}
