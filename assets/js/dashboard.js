/**
 * Logix Software House - Admin Dashboard Script
 * Complete management portal for employees, job openings, and applications pipeline.
 */

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
});

function initDashboard() {
  updateDashboardMetrics();
  renderEmployeesTable();
  renderJobsTable();
  renderApplicationsTable();
  initDashboardTabs();
  initModals();
  initSidebarToggle();
}

// 1. Live Metrics
function updateDashboardMetrics() {
  const stats = LogixStore.getStats();

  const totalEmpEl = document.getElementById("metric-total-employees");
  const activeJobsEl = document.getElementById("metric-active-jobs");
  const totalAppsEl = document.getElementById("metric-total-applications");
  const shortlistedEl = document.getElementById("metric-shortlisted-count");
  const hiredEl = document.getElementById("metric-hired-count");

  if (totalEmpEl) totalEmpEl.textContent = stats.totalEmployees;
  if (activeJobsEl) activeJobsEl.textContent = stats.activeJobs;
  if (totalAppsEl) totalAppsEl.textContent = stats.totalApplications;
  if (shortlistedEl) shortlistedEl.textContent = stats.shortlistedCount;
  if (hiredEl) hiredEl.textContent = stats.hiredCount;
}

// 2. Tab Navigation
function initDashboardTabs() {
  const tabs = document.querySelectorAll(".sidebar-link[data-tab]");
  const tabPanels = document.querySelectorAll(".dashboard-tab-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.getAttribute("data-tab");
      tabPanels.forEach(panel => {
        if (panel.id === `tab-${target}`) {
          panel.style.display = "block";
        } else {
          panel.style.display = "none";
        }
      });

      // Update Topbar Title
      const titleEl = document.getElementById("dashboard-section-title");
      if (titleEl) {
        titleEl.textContent = tab.querySelector("span").textContent;
      }
    });
  });
}

// 3. Render Employees Table
function renderEmployeesTable() {
  const tbody = document.getElementById("employees-table-body");
  if (!tbody) return;

  const employees = LogixStore.getEmployees();

  if (employees.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 30px;">No employees registered yet. Click "Add Employee" above.</td></tr>`;
    return;
  }

  tbody.innerHTML = employees.map(emp => `
    <tr>
      <td>
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${emp.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'}" alt="${emp.name}" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover;">
          <div>
            <div style="font-weight: 600; color: #fff;">${emp.name}</div>
            <div style="font-size: 0.78rem; color: var(--text-dim);">${emp.id}</div>
          </div>
        </div>
      </td>
      <td>
        <span style="color: #fff; font-weight: 500;">${emp.role}</span>
      </td>
      <td>
        <span class="job-badge-tag badge-engineering">${emp.department}</span>
      </td>
      <td>
        <div style="font-size: 0.85rem;">${emp.email}</div>
        <div style="font-size: 0.75rem; color: var(--text-dim);">${emp.phone}</div>
      </td>
      <td>
        <span class="status-badge status-active">${emp.status}</span>
      </td>
      <td>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-sm" onclick="deleteEmployee('${emp.id}')" title="Remove Employee" style="padding: 6px 10px; color: #f87171;">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join("");
}

window.deleteEmployee = function(id) {
  if (confirm("Are you sure you want to remove this employee from records?")) {
    LogixStore.deleteEmployee(id);
    renderEmployeesTable();
    updateDashboardMetrics();
    window.showToast("Employee removed successfully", "success");
  }
};

// 4. Render Jobs Table
function renderJobsTable() {
  const tbody = document.getElementById("jobs-table-body");
  if (!tbody) return;

  const jobs = LogixStore.getJobs();

  if (jobs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 30px;">No active job postings. Click "Post New Job" above.</td></tr>`;
    return;
  }

  tbody.innerHTML = jobs.map(job => `
    <tr>
      <td>
        <div style="font-weight: 600; color: #fff;">${job.title}</div>
        <div style="font-size: 0.75rem; color: var(--text-dim);">${job.id} • Posted ${job.postedDate}</div>
      </td>
      <td><span class="job-badge-tag badge-engineering">${job.department}</span></td>
      <td><span style="color: var(--secondary); font-size: 0.85rem;">${job.type}</span></td>
      <td><span style="color: var(--success); font-weight: 600;">${job.salary}</span></td>
      <td>
        <span class="status-badge status-active">Active</span>
      </td>
      <td>
        <div style="display: flex; gap: 8px;">
          <a href="job-details.html?id=${job.id}" target="_blank" class="btn btn-secondary btn-sm" style="padding: 6px 10px;" title="Preview">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <button class="btn btn-secondary btn-sm" onclick="deleteJob('${job.id}')" title="Delete Job" style="padding: 6px 10px; color: #f87171;">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join("");
}

window.deleteJob = function(id) {
  if (confirm("Are you sure you want to delete this job posting?")) {
    LogixStore.deleteJob(id);
    renderJobsTable();
    updateDashboardMetrics();
    window.showToast("Job posting deleted", "success");
  }
};

// 5. Render Applications Table
function renderApplicationsTable() {
  const tbody = document.getElementById("applications-table-body");
  if (!tbody) return;

  const applications = LogixStore.getApplications();

  if (applications.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 30px;">No candidate applications received yet.</td></tr>`;
    return;
  }

  function getStatusClass(status) {
    switch (status) {
      case 'Shortlisted': return 'status-shortlisted';
      case 'Interviewed': return 'status-interviewed';
      case 'Hired': return 'status-hired';
      case 'Rejected': return 'status-rejected';
      default: return 'status-new';
    }
  }

  tbody.innerHTML = applications.map(app => `
    <tr>
      <td>
        <div style="font-weight: 600; color: #fff;">${app.applicantName}</div>
        <div style="font-size: 0.75rem; color: var(--text-dim);">${app.email} • ${app.phone}</div>
      </td>
      <td>
        <div style="color: #fff; font-weight: 500;">${app.jobTitle}</div>
        <div style="font-size: 0.75rem; color: var(--text-dim);">${app.appliedDate}</div>
      </td>
      <td>
        <span style="font-size: 0.85rem; color: var(--text-muted);">${app.experience}</span>
      </td>
      <td>
        <span style="display: inline-flex; align-items: center; gap: 6px; color: var(--primary); font-size: 0.82rem; background: rgba(99,102,241,0.1); padding: 4px 10px; border-radius: var(--radius-sm);">
          <i class="fa-solid fa-file-pdf"></i>
          ${app.cvFileName}
        </span>
      </td>
      <td>
        <select class="filter-select" style="padding: 4px 10px; font-size: 0.8rem;" onchange="updateAppStatus('${app.id}', this.value)">
          <option value="New" ${app.status === 'New' ? 'selected' : ''}>New</option>
          <option value="Under Review" ${app.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
          <option value="Shortlisted" ${app.status === 'Shortlisted' ? 'selected' : ''}>Shortlisted</option>
          <option value="Interviewed" ${app.status === 'Interviewed' ? 'selected' : ''}>Interviewed</option>
          <option value="Hired" ${app.status === 'Hired' ? 'selected' : ''}>Hired</option>
          <option value="Rejected" ${app.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
        </select>
      </td>
      <td>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-sm" onclick="viewApplicationNote('${app.id}')" style="padding: 6px 10px;" title="View Note">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="btn btn-secondary btn-sm" onclick="deleteApplication('${app.id}')" style="padding: 6px 10px; color: #f87171;" title="Delete">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join("");
}

window.updateAppStatus = function(id, newStatus) {
  LogixStore.updateApplicationStatus(id, newStatus);
  updateDashboardMetrics();
  window.showToast(`Application updated to "${newStatus}"`, "success");
};

window.viewApplicationNote = function(id) {
  const apps = LogixStore.getApplications();
  const app = apps.find(a => a.id === id);
  if (!app) return;

  alert(`Candidate: ${app.applicantName}\nRole: ${app.jobTitle}\nSkills: ${app.skills}\nPortfolio: ${app.portfolioUrl || 'N/A'}\n\nNote:\n${app.coverNote || 'No custom note provided.'}`);
};

window.deleteApplication = function(id) {
  if (confirm("Are you sure you want to delete this job application?")) {
    LogixStore.deleteApplication(id);
    renderApplicationsTable();
    updateDashboardMetrics();
    window.showToast("Application deleted", "success");
  }
};

// 6. Modals (Add Employee & Post Job)
function initModals() {
  // Add Employee Modal
  const addEmpBtn = document.getElementById("btn-open-add-employee");
  const addEmpModal = document.getElementById("modal-add-employee");
  const closeEmpModal = document.getElementById("btn-close-emp-modal");
  const formAddEmp = document.getElementById("form-add-employee");

  if (addEmpBtn && addEmpModal) {
    addEmpBtn.addEventListener("click", () => addEmpModal.classList.add("active"));
  }
  if (closeEmpModal && addEmpModal) {
    closeEmpModal.addEventListener("click", () => addEmpModal.classList.remove("active"));
  }

  if (formAddEmp) {
    formAddEmp.addEventListener("submit", (e) => {
      e.preventDefault();
      const newEmp = {
        id: "emp-" + Math.floor(100 + Math.random() * 900),
        name: document.getElementById("emp-name").value.trim(),
        role: document.getElementById("emp-role").value.trim(),
        department: document.getElementById("emp-department").value,
        email: document.getElementById("emp-email").value.trim(),
        phone: document.getElementById("emp-phone").value.trim() || "+1 (555) 000-0000",
        joinDate: new Date().toISOString().split("T")[0],
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
        skills: ["Software Engineering", "Full-stack"],
        salary: document.getElementById("emp-salary").value.trim() || "$110,000"
      };

      LogixStore.addEmployee(newEmp);
      addEmpModal.classList.remove("active");
      formAddEmp.reset();
      renderEmployeesTable();
      updateDashboardMetrics();
      window.showToast("Employee added successfully!", "success");
    });
  }

  // Post Job Modal
  const postJobBtn = document.getElementById("btn-open-post-job");
  const postJobModal = document.getElementById("modal-post-job");
  const closeJobModal = document.getElementById("btn-close-job-modal");
  const formPostJob = document.getElementById("form-post-job");

  if (postJobBtn && postJobModal) {
    postJobBtn.addEventListener("click", () => postJobModal.classList.add("active"));
  }
  if (closeJobModal && postJobModal) {
    closeJobModal.addEventListener("click", () => postJobModal.classList.remove("active"));
  }

  if (formPostJob) {
    formPostJob.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("job-title-input").value.trim();
      const department = document.getElementById("job-dept-input").value;
      const type = document.getElementById("job-type-input").value;
      const location = document.getElementById("job-location-input").value.trim() || "Remote";
      const salary = document.getElementById("job-salary-input").value.trim() || "$100k - $130k";
      const experience = document.getElementById("job-exp-input").value.trim() || "3+ Years";
      const description = document.getElementById("job-desc-input").value.trim();

      const newJob = {
        id: "job-" + Math.floor(100 + Math.random() * 900),
        title,
        department,
        location,
        type,
        experience,
        salary,
        postedDate: new Date().toISOString().split("T")[0],
        tags: ["TypeScript", "Full-stack", "Innovation"],
        isFeatured: true,
        description: description || "Exciting opportunity to build cutting edge software solutions at Logix.",
        responsibilities: [
          "Develop high-quality features in modern web/mobile stacks.",
          "Collaborate with multi-disciplinary squads to ship impact.",
          "Maintain code reviews and architectural excellence."
        ],
        requirements: [
          "Demonstrated expertise in relevant technologies.",
          "Proven track record of shipping production code.",
          "Strong team collaboration and problem solving."
        ],
        benefits: [
          "Competitive salary & health coverage",
          "Learning budget and flexible hours",
          "Top-spec equipment"
        ]
      };

      LogixStore.addJob(newJob);
      postJobModal.classList.remove("active");
      formPostJob.reset();
      renderJobsTable();
      updateDashboardMetrics();
      window.showToast("Job vacancy posted successfully!", "success");
    });
  }
}

// 7. Sidebar Mobile Toggle
function initSidebarToggle() {
  const toggleBtn = document.getElementById("btn-toggle-sidebar");
  const sidebar = document.querySelector(".dashboard-sidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
}
