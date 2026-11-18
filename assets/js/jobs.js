/**
 * Logix Software House - Jobs Filtering & Rendering Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  const jobsListContainer = document.getElementById("jobs-list-container");
  if (!jobsListContainer) return;

  const searchInput = document.getElementById("job-search-input");
  const departmentFilter = document.getElementById("department-filter");
  const typeFilter = document.getElementById("type-filter");
  const jobCountEl = document.getElementById("jobs-count-badge");

  function getDepartmentBadgeClass(dept) {
    switch (dept) {
      case 'Engineering': return 'badge-engineering';
      case 'AI & ML': return 'badge-ai';
      case 'Design': return 'badge-design';
      case 'DevOps & Cloud': return 'badge-devops';
      case 'Quality Assurance': return 'badge-qa';
      default: return 'badge-engineering';
    }
  }

  function renderJobs() {
    const jobs = LogixStore.getJobs();
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const selectedDept = departmentFilter ? departmentFilter.value : "all";
    const selectedType = typeFilter ? typeFilter.value : "all";

    const filtered = jobs.filter(job => {
      const matchesQuery = job.title.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.tags.some(t => t.toLowerCase().includes(query));

      const matchesDept = selectedDept === "all" || job.department === selectedDept;
      const matchesType = selectedType === "all" || job.type === selectedType;

      return matchesQuery && matchesDept && matchesType;
    });

    if (jobCountEl) {
      jobCountEl.textContent = `${filtered.length} Open Positions`;
    }

    if (filtered.length === 0) {
      jobsListContainer.innerHTML = `
        <div class="glass-card" style="text-align: center; padding: 60px 20px;">
          <i class="fa-solid fa-briefcase" style="font-size: 3rem; color: var(--text-dim); margin-bottom: 16px;"></i>
          <h3 style="margin-bottom: 8px;">No matching openings found</h3>
          <p style="color: var(--text-muted); max-width: 450px; margin: 0 auto 20px;">
            We couldn't find any job vacancies matching your criteria. Try adjusting your filters or submitting an open application.
          </p>
          <a href="apply.html" class="btn btn-primary btn-sm">Submit Open Application</a>
        </div>
      `;
      return;
    }

    jobsListContainer.innerHTML = filtered.map(job => `
      <div class="job-card">
        <div class="job-card-header">
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
              <span class="job-badge-tag ${getDepartmentBadgeClass(job.department)}">${job.department}</span>
              ${job.isFeatured ? '<span class="badge-pill" style="margin-bottom: 0; padding: 2px 10px; font-size: 0.72rem; border-color: rgba(6,182,212,0.4); color: var(--secondary);">Featured</span>' : ''}
            </div>
            <h3 class="job-card-title">${job.title}</h3>
          </div>
          <div style="display: flex; gap: 10px; align-items: center;">
            <a href="job-details.html?id=${job.id}" class="btn btn-secondary btn-sm">Details</a>
            <a href="apply.html?id=${job.id}" class="btn btn-primary btn-sm">Apply Now</a>
          </div>
        </div>

        <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6;">
          ${job.description}
        </p>

        <div class="job-meta-list">
          <div class="job-meta-item">
            <i class="fa-solid fa-location-dot" style="color: var(--primary);"></i>
            <span>${job.location}</span>
          </div>
          <div class="job-meta-item">
            <i class="fa-regular fa-clock" style="color: var(--secondary);"></i>
            <span>${job.type}</span>
          </div>
          <div class="job-meta-item">
            <i class="fa-solid fa-sack-dollar" style="color: var(--success);"></i>
            <span>${job.salary}</span>
          </div>
          <div class="job-meta-item">
            <i class="fa-solid fa-briefcase" style="color: var(--accent);"></i>
            <span>${job.experience}</span>
          </div>
        </div>

        <div class="job-tags-container">
          ${job.tags.map(t => `<span class="skill-pill">${t}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  if (searchInput) searchInput.addEventListener("input", renderJobs);
  if (departmentFilter) departmentFilter.addEventListener("change", renderJobs);
  if (typeFilter) typeFilter.addEventListener("change", renderJobs);

  renderJobs();
});
