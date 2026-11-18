/**
 * Logix Software House - Job Application Handling
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("job-application-form");
  const jobSelect = document.getElementById("job-select");
  const dropZone = document.getElementById("cv-drop-zone");
  const fileInput = document.getElementById("cv-file-input");
  const fileNameDisplay = document.getElementById("selected-file-name");

  // Populate Job Select dropdown from LogixStore
  const jobs = LogixStore.getJobs();
  if (jobSelect) {
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedJobId = urlParams.get("id");

    jobSelect.innerHTML = `
      <option value="">-- General Application (Any Department) --</option>
      ${jobs.map(j => `
        <option value="${j.id}" ${preselectedJobId === j.id ? "selected" : ""}>
          ${j.title} (${j.department} - ${j.type})
        </option>
      `).join("")}
    `;

    // If job preselected, update page subtitle
    if (preselectedJobId) {
      const selectedJob = LogixStore.getJobById(preselectedJobId);
      const jobNotice = document.getElementById("applying-for-notice");
      if (selectedJob && jobNotice) {
        jobNotice.innerHTML = `Applying for: <strong style="color: var(--primary);">${selectedJob.title}</strong> (${selectedJob.department})`;
        jobNotice.style.display = "block";
      }
    }
  }

  // File Upload Handlers
  let selectedCvFileName = "";

  if (dropZone && fileInput) {
    dropZone.addEventListener("click", () => fileInput.click());

    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.classList.add("dragover");
    });

    dropZone.addEventListener("dragleave", () => {
      dropZone.classList.remove("dragover");
    });

    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropZone.classList.remove("dragover");
      if (e.dataTransfer.files.length > 0) {
        fileInput.files = e.dataTransfer.files;
        handleFileSelect(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        handleFileSelect(e.target.files[0]);
      }
    });

    function handleFileSelect(file) {
      selectedCvFileName = file.name;
      if (fileNameDisplay) {
        fileNameDisplay.innerHTML = `
          <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); padding: 8px 16px; border-radius: var(--radius-sm); color: #34d399; margin-top: 10px;">
            <i class="fa-solid fa-file-pdf"></i>
            <span>${file.name} (${(file.size / 1024).toFixed(1)} KB)</span>
          </div>
        `;
      }
    }
  }

  // Form Submit Handler
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("applicant-name").value.trim();
      const email = document.getElementById("applicant-email").value.trim();
      const phone = document.getElementById("applicant-phone").value.trim();
      const experience = document.getElementById("applicant-experience").value.trim();
      const skills = document.getElementById("applicant-skills").value.trim();
      const portfolioUrl = document.getElementById("applicant-portfolio") ? document.getElementById("applicant-portfolio").value.trim() : "";
      const coverNote = document.getElementById("applicant-cover") ? document.getElementById("applicant-cover").value.trim() : "";
      const jobId = jobSelect ? jobSelect.value : "";

      let jobTitle = "General Application";
      if (jobId) {
        const found = LogixStore.getJobById(jobId);
        if (found) jobTitle = found.title;
      }

      if (!fullName || !email || !phone) {
        alert("Please fill in your name, email, and phone number.");
        return;
      }

      const newApplication = {
        id: "app-" + Date.now().toString().slice(-4),
        jobId: jobId || "general",
        jobTitle: jobTitle,
        applicantName: fullName,
        email: email,
        phone: phone,
        experience: experience || "Entry / 1-2 Years",
        skills: skills || "Full-stack development",
        portfolioUrl: portfolioUrl,
        cvFileName: selectedCvFileName || "Uploaded_Candidate_Resume.pdf",
        appliedDate: new Date().toISOString().split("T")[0],
        status: "New",
        coverNote: coverNote
      };

      // Save to store
      LogixStore.addApplication(newApplication);

      // Show success modal or toast
      const successModal = document.getElementById("application-success-modal");
      if (successModal) {
        successModal.classList.add("active");
      } else {
        window.showToast("Application submitted successfully! Our HR team will contact you soon.", "success");
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1500);
      }
    });
  }
});
