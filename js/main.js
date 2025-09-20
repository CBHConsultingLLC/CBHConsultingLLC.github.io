function showSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((section) => section.classList.remove("active"));
  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelector(`.nav-link[data-section='${id}']`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners for navigation
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section");
      showSection(sectionId);
      
      // Load FHIR applications when FHIR section is shown
      if (sectionId === "misc1") {
        console.log("FHIR section clicked, loading applications...");
        loadFHIRApplications();
      }
    });
  });

  // Load FHIR applications on page load if FHIR section is active
  const activeSection = document.querySelector(".section.active");
  if (activeSection && activeSection.id === "misc1") {
    console.log("FHIR section is active on page load, loading applications...");
    loadFHIRApplications();
  }


  document.querySelectorAll(".inventory-preview").forEach(function (img) {
    img.addEventListener("click", function () {
      var largeImg = this.getAttribute("data-img");
      document.getElementById("inventoryModalImg").src = largeImg;
    });
  });

  document.querySelectorAll(".ccl-preview").forEach(function (img) {
    img.addEventListener("click", function () {
      var largeImg = this.getAttribute("data-img");
      document.getElementById("cclModalImg").src = largeImg;
    });
  });

  document.querySelectorAll(".mpage-preview").forEach(function (img) {
    img.addEventListener("click", function () {
      var largeImg = this.getAttribute("data-img");
      document.getElementById("mpageModalImg").src = largeImg;
    });
  });

  document.querySelectorAll(".rrd-preview").forEach(function (img) {
    img.addEventListener("click", function () {
      var largeImg = this.getAttribute("data-img");
      document.getElementById("rrdModalImg").src = largeImg;
    });
  });
});

// Function to load and display FHIR applications
function loadFHIRApplications() {
  const container = document.getElementById("fhir-apps-container");
  if (!container) {
    console.error("FHIR apps container not found");
    return;
  }
  
  if (container.innerHTML.trim() !== "") {
    console.log("FHIR applications already loaded");
    return; // Already loaded
  }

  console.log("Loading FHIR applications...");

  try {
    // Embedded application data (to avoid CORS issues with local files)
    const appData = {
      "applicationInformation": {
        "applicationName": "ETS - FHIR Hello",
        "applicationOwner": "CBH Consulting LLC",
        "applicationId": "408b139e-bfb1-4aac-be55-ed27dd2005a5",
        "clientId": "577deae8-347a-4bf7-a4e4-1833fc1bca82",
        "applicationType": "Provider",
        "typeOfAccess": "Online",
        "applicationPrivacy": "Public",
        "smartVersion": "SMART v1",
        "intendedUsers": ["Individual/Caregiver", "Clinical Team", "Healthcare Administrator/Executive"],
        "intendedPurposes": ["Clinical Tools", "Educational Resources"],
        "redirectUri": "https://fhir.ehrtechsolutions.com/app.html",
        "smartLaunchUri": "https://fhir.ehrtechsolutions.com/launch.html",
        "defaultFhirVersion": "r4",
        "privacyPolicyUri": "https://ehrtechsolutions.com/privacy",
        "termsOfServiceUri": "https://ehrtechsolutions.com/tos",
        "technicalSupportContactUri": "https://github.com/CBHConsultingLLC/ets-fhir-hello/issues",
        "technicalSupportEmail": null,
        "technicalSupportPhone": null,
        "sandboxUrl": "https://fhir.ehrtechsolutions.com/launch.html?iss=https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d"
      },
      "applicationType": "Provider",
      "standardCapabilities": [
        "launch",
        "profile (deprecated)",
        "fhirUser",
        "openid"
      ],
      "userProductAPIs": [
        { "name": "Account", "access": ["read"] },
        { "name": "AllergyIntolerance", "access": ["read", "write"] },
        { "name": "Appointment", "access": ["read", "write"] },
        { "name": "Basic", "access": ["write"] },
        { "name": "Binary", "access": ["read"] },
        { "name": "CarePlan", "access": ["read"] },
        { "name": "CareTeam", "access": ["read"] },
        { "name": "ChargeItem", "access": ["read", "write"] },
        { "name": "Communication", "access": ["read", "write"] },
        { "name": "Condition", "access": ["read", "write"] },
        { "name": "Consent", "access": ["read"] },
        { "name": "Coverage", "access": ["read", "write"] },
        { "name": "Device", "access": ["read"] },
        { "name": "DiagnosticReport", "access": ["read", "write"] },
        { "name": "DocumentReference", "access": ["read", "write"] },
        { "name": "Encounter", "access": ["read", "write"] },
        { "name": "FamilyMemberHistory", "access": ["read", "write"] },
        { "name": "Goal", "access": ["read"] },
        { "name": "Immunization", "access": ["read", "write"] },
        { "name": "InsurancePlan", "access": ["read"] },
        { "name": "Location", "access": ["read"] },
        { "name": "Media", "access": ["read"] },
        { "name": "MedicationAdministration", "access": ["read"] },
        { "name": "MedicationDispense", "access": ["read"] },
        { "name": "MedicationRequest", "access": ["read", "write"] },
        { "name": "NutritionOrder", "access": ["read"] },
        { "name": "Observation", "access": ["read", "write"] },
        { "name": "Organization", "access": ["read", "write"] },
        { "name": "Patient", "access": ["read", "write"] },
        { "name": "Person", "access": ["read"] },
        { "name": "Practitioner", "access": ["read", "write"] },
        { "name": "Procedure", "access": ["read", "write"] },
        { "name": "Provenance", "access": ["read", "write"] },
        { "name": "Questionnaire", "access": ["read"] },
        { "name": "QuestionnaireResponse", "access": ["read", "write"] },
        { "name": "RelatedPerson", "access": ["read", "write"] },
        { "name": "Schedule", "access": ["read"] },
        { "name": "ServiceRequest", "access": ["read"] },
        { "name": "Slot", "access": ["read", "write"] },
        { "name": "Specimen", "access": ["read"] }
      ]
    };
    
    console.log("Application data loaded:", appData);
    const appCard = createFHIRAppCard(appData);
    container.innerHTML = appCard;
    
  } catch (error) {
    console.error("Error loading FHIR applications:", error);
    container.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning" role="alert">
          Unable to load FHIR applications. Please try again later.
          <br><small>Check the browser console for more details.</small>
        </div>
      </div>
    `;
  }
}

// Function to create a FHIR application card
function createFHIRAppCard(appData) {
  const info = appData.applicationInformation;
  const capabilities = appData.standardCapabilities || [];
  const userAPIs = appData.userProductAPIs || [];
  
  // Create badges for capabilities
  const capabilityBadges = capabilities.map(cap => 
    `<span class="badge bg-primary me-1">${cap}</span>`
  ).join("");
  
  // Create a summary of APIs
  const apiSummary = userAPIs.slice(0, 5).map(api => 
    `${api.name} (${api.access.join(", ")})`
  ).join(", ");
  
  const hasMoreAPIs = userAPIs.length > 5;
  
  return `
    <div class="col">
      <div class="card h-100">
        <div class="card-header bg-primary text-white">
          <h5 class="card-title mb-1">${info.applicationName}</h5>
          <small class="text-light">${info.applicationType} • ${info.smartVersion}</small>
        </div>
        <div class="card-body">
          <p class="card-text">
            <strong>Owner:</strong> ${info.applicationOwner}<br>
            <strong>FHIR Version:</strong> ${info.defaultFhirVersion}<br>
            <strong>Access Type:</strong> ${info.typeOfAccess}<br>
            <strong>Privacy:</strong> ${info.applicationPrivacy}
          </p>
          
          <div class="mb-3">
            <h6>Intended Users:</h6>
            <p class="small text-muted">${info.intendedUsers.join(", ")}</p>
          </div>
          
          <div class="mb-3">
            <h6>Purposes:</h6>
            <p class="small text-muted">${info.intendedPurposes.join(", ")}</p>
          </div>
          
          <div class="mb-3">
            <h6>SMART Capabilities:</h6>
            <div class="mb-2">${capabilityBadges}</div>
          </div>
          
          <div class="mb-3">
            <h6>API Access:</h6>
            <p class="small text-muted">
              ${apiSummary}${hasMoreAPIs ? ` and ${userAPIs.length - 5} more...` : ""}
            </p>
          </div>
        </div>
        <div class="card-footer">
          <div class="d-grid gap-2">
            ${info.sandboxUrl ? `<a href="${info.sandboxUrl}" target="_blank" class="btn btn-success">Launch Sandbox</a>` : ""}
            ${info.smartLaunchUri ? `<a href="${info.smartLaunchUri}" target="_blank" class="btn btn-primary">Launch App</a>` : ""}
            ${info.technicalSupportContactUri ? `<a href="${info.technicalSupportContactUri}" target="_blank" class="btn btn-outline-secondary btn-sm">Support</a>` : ""}
          </div>
        </div>
      </div>
    </div>
  `;
}
