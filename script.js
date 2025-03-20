const container = document.getElementById("container");

const assignments = [
  {
    name: "JavaScript Assignment-1",
    github: "",
    demo: "/MasterJi/JavaScriptAssignment-1",
  },
  {
    name: "JavaScript Assignment-2",
    github:
      "https://github.com/amr35h/SoftDevCohort/tree/main/MasterJi/JavaScriptAssignment-2",
    demo: "/MasterJi/JavaScriptAssignment-2",
  },
  {
    name: "JavaScript Assignment-3",
    github:
      "https://github.com/amr35h/SoftDevCohort/tree/main/MasterJi/JavaScriptAssignment-3",
    demo: "/MasterJi/JavaScriptAssignment-3",
  },
];

function displayAssignments() {
  let elements = ``;
  assignments.map((assignment) => {
    elements += `
                <div class="card">
                    <h2 class="card-title">${assignment.name}</h2>
                    <a href="${assignment.github}" class="button">Github</a>
                    <a href="${assignment.demo}" class="button">Demo</a>
                </div>
                `;
  });
  container.innerHTML = elements;
}

window.onload = displayAssignments();
