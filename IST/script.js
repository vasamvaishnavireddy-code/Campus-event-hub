/* =====================================================
   EVENT DATA
===================================================== */

const events = [

    {
        id: 1,
        name: "Code Sprint",
        department: "CSE",
        category: "Technical",
        date: "2026-09-15",
        time: "09:00 AM - 12:00 PM",
        venue: "Computer Lab - Block A",
        icon: "💻",

        description:
            "A competitive coding challenge where students solve programming problems and demonstrate their problem-solving skills.",

        coordinator: "S.Pravasthi",

        whatsapp:
            "https://chat.whatsapp.com/",

        excel:
            "https://docs.google.com/spreadsheets/"
    },


    {
        id: 2,
        name: "Hackathon 2026",
        department: "AIML",
        category: "Innovation",
        date: "2026-09-18",
        time: "09:00 AM - 05:00 PM",
        venue: "Innovation Hall",
        icon: "🚀",

        description:
            "A team-based innovation challenge where students build creative technology solutions for real-world problems.",

        coordinator: "Priya Sharma",

        whatsapp:
            "https://chat.whatsapp.com/",

        excel:
            "https://docs.google.com/spreadsheets/"
    },


    {
        id: 3,
        name: "Frontend Frenzy",
        department: "CSE",
        category: "Creative",
        date: "2026-09-22",
        time: "10:00 AM - 01:00 PM",
        venue: "Seminar Hall - Block B",
        icon: "🎨",

        description:
            "A frontend development competition where participants design attractive and responsive web interfaces.",

        coordinator: "Nikhitha",

        whatsapp:
            "https://chat.whatsapp.com/",

        excel:
            "https://docs.google.com/spreadsheets/"
    },


    {
        id: 4,
        name: "Tech Talk",
        department: "ECE",
        category: "Technical",
        date: "2026-09-25",
        time: "11:00 AM - 01:00 PM",
        venue: "College Auditorium",
        icon: "🎤",

        description:
            "An interactive technical session where students learn about emerging technologies from industry experts.",

        coordinator: "Brahmini",

        whatsapp:
            "https://chat.whatsapp.com/",

        excel:
            "https://docs.google.com/spreadsheets/"
    },


    {
        id: 5,
        name: "Cultural Fest",
        department: "Cultural Club",
        category: "Cultural",
        date: "2026-09-28",
        time: "02:00 PM - 06:00 PM",
        venue: "College Auditorium",
        icon: "🎭",

        description:
            "A vibrant celebration of student talent featuring music, dance, drama and other cultural performances.",

        coordinator: "Rakshitha",

        whatsapp:
            "https://chat.whatsapp.com/",

        excel:
            "https://docs.google.com/spreadsheets/"
    },


    {
        id: 6,
        name: "Sports Meet",
        department: "Sports Club",
        category: "Sports",
        date: "2026-10-02",
        time: "08:00 AM - 04:00 PM",
        venue: "College Sports Ground",
        icon: "🏆",

        description:
            "An exciting inter-department sports event featuring multiple games and athletic activities.",

        coordinator: "Shivajyothi",

        whatsapp:
            "https://chat.whatsapp.com/",

        excel:
            "https://docs.google.com/spreadsheets/"
    }

];


/* =====================================================
   ELEMENTS
===================================================== */

const eventsGrid =
    document.getElementById("eventsGrid");

const searchInput =
    document.getElementById("searchInput");

const departmentFilter =
    document.getElementById("departmentFilter");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortEvents =
    document.getElementById("sortEvents");

const eventCount =
    document.getElementById("eventCount");

const noEvents =
    document.getElementById("noEvents");

const eventSelect =
    document.getElementById("event");

const registrationForm =
    document.getElementById("registrationForm");

const registrationList =
    document.getElementById("registrationList");

const participatedCount =
    document.getElementById("participatedCount");

const registrationCount =
    document.getElementById("registrationCount");

const conductedCount =
    document.getElementById("conductedCount");

const formMessage =
    document.getElementById("formMessage");

const countdown =
    document.getElementById("countdown");


/* =====================================================
   MODAL
===================================================== */

const eventModal =
    document.getElementById("eventModal");

const closeModal =
    document.getElementById("closeModal");

const modalIcon =
    document.getElementById("modalIcon");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalDate =
    document.getElementById("modalDate");

const modalTime =
    document.getElementById("modalTime");

const modalVenue =
    document.getElementById("modalVenue");

const modalDepartment =
    document.getElementById("modalDepartment");

const modalCoordinator =
    document.getElementById("modalCoordinator");


/* =====================================================
   LOCAL STORAGE
===================================================== */

let registrations =
    JSON.parse(
        localStorage.getItem(
            "campusRegistrations"
        )
    ) || [];


/* =====================================================
   FORMAT DATE
===================================================== */

function formatDate(dateString) {

    const date =
        new Date(
            dateString + "T00:00:00"
        );

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );
}


/* =====================================================
   CATEGORY CLASS
===================================================== */

function getCategoryClass(category) {

    return (
        "category-" +
        category
            .toLowerCase()
            .replace(/\s+/g, "-")
    );

}


/* =====================================================
   EVENT DROPDOWN
===================================================== */

function renderEventDropdown() {

    eventSelect.innerHTML = `
        <option value="">
            Choose an event
        </option>
    `;


    events.forEach(function(event) {

        const option =
            document.createElement("option");

        option.value = event.id;

        option.textContent =
            event.name;

        eventSelect.appendChild(option);

    });

}


/* =====================================================
   RENDER EVENTS
===================================================== */

function renderEvents(eventList) {

    eventsGrid.innerHTML = "";


    eventCount.textContent =
        `${eventList.length} event${eventList.length !== 1 ? "s" : ""} found`;


    if (eventList.length === 0) {

        noEvents.style.display =
            "block";

        return;
    }


    noEvents.style.display =
        "none";


    eventList.forEach(function(event) {

        const card =
            document.createElement("article");

        card.className =
            "event-card";


        const categoryClass =
            getCategoryClass(
                event.category
            );


        card.innerHTML = `

            <div class="event-image ${categoryClass}">

                <span class="event-icon">
                    ${event.icon}
                </span>

                <span class="event-category">
                    ${event.category}
                </span>

            </div>


            <div class="event-content">

                <h3>
                    ${event.name}
                </h3>


                <p class="event-department">
                    🏫 ${event.department}
                </p>


                <p>
                    📅 ${formatDate(event.date)}
                </p>


                <p>
                    ⏰ ${event.time}
                </p>


                <p>
                    📍 ${event.venue}
                </p>


                <p class="event-description">
                    ${event.description}
                </p>


                <div class="event-card-buttons">


                    <button
                        type="button"
                        class="details-btn"
                        data-id="${event.id}">

                        View Details

                    </button>


                    <button
                        type="button"
                        class="register-event-btn"
                        data-id="${event.id}">

                        Register →

                    </button>


                </div>

            </div>
        `;


        eventsGrid.appendChild(card);

    });


    addEventButtonListeners();
}


/* =====================================================
   BUTTON LISTENERS
===================================================== */

function addEventButtonListeners() {

    document
        .querySelectorAll(".details-btn")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    openEventModal(
                        Number(
                            button.dataset.id
                        )
                    );

                }
            );

        });


    document
        .querySelectorAll(".register-event-btn")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    eventSelect.value =
                        button.dataset.id;

                    document
                        .getElementById("register")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );

        });

}


/* =====================================================
   SEARCH + FILTER + SORT
===================================================== */

function filterAndSortEvents() {

    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    const selectedDepartment =
        departmentFilter.value;


    const selectedCategory =
        categoryFilter.value;


    let filtered =
        events.filter(function(event) {

            const searchMatch =
                event.name
                    .toLowerCase()
                    .includes(searchText);


            const departmentMatch =
                selectedDepartment === "all" ||
                event.department ===
                selectedDepartment;


            const categoryMatch =
                selectedCategory === "all" ||
                event.category ===
                selectedCategory;


            return (
                searchMatch &&
                departmentMatch &&
                categoryMatch
            );

        });


    if (
        sortEvents.value ===
        "nearest"
    ) {

        filtered.sort(
            function(a, b) {

                return (
                    new Date(a.date) -
                    new Date(b.date)
                );

            }
        );

    }


    if (
        sortEvents.value ===
        "latest"
    ) {

        filtered.sort(
            function(a, b) {

                return (
                    new Date(b.date) -
                    new Date(a.date)
                );

            }
        );

    }


    renderEvents(filtered);
}


/* =====================================================
   SEARCH EVENTS
===================================================== */

searchInput.addEventListener(
    "input",
    filterAndSortEvents
);


/* =====================================================
   FILTERS
===================================================== */

departmentFilter.addEventListener(
    "change",
    filterAndSortEvents
);


categoryFilter.addEventListener(
    "change",
    filterAndSortEvents
);


sortEvents.addEventListener(
    "change",
    filterAndSortEvents
);


/* =====================================================
   MODAL
===================================================== */

function openEventModal(eventId) {

    const event =
        events.find(function(item) {

            return item.id === eventId;

        });


    if (!event) {
        return;
    }


    modalIcon.textContent =
        event.icon;

    modalCategory.textContent =
        event.category;

    modalTitle.textContent =
        event.name;

    modalDescription.textContent =
        event.description;

    modalDate.textContent =
        formatDate(event.date);

    modalTime.textContent =
        event.time;

    modalVenue.textContent =
        event.venue;

    modalDepartment.textContent =
        event.department;

    modalCoordinator.textContent =
        event.coordinator;


    eventModal.classList.add(
        "show"
    );


    eventModal.setAttribute(
        "aria-hidden",
        "false"
    );


    eventSelect.value =
        event.id;
}


closeModal.addEventListener(
    "click",
    function() {

        eventModal.classList.remove(
            "show"
        );

    }
);


eventModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            eventModal
        ) {

            eventModal.classList.remove(
                "show"
            );

        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            eventModal.classList.remove(
                "show"
            );

        }

    }
);


/* =====================================================
   VALIDATION
===================================================== */

function showError(
    field,
    message
) {

    const error =
        document.getElementById(
            field + "Error"
        );


    if (error) {

        error.textContent =
            message;

    }

}


function clearErrors() {

    document
        .querySelectorAll(".error")
        .forEach(function(error) {

            error.textContent = "";

        });


    formMessage.textContent = "";

    formMessage.className =
        "form-message";
}


function validEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


function validPhone(phone) {

    return /^[6-9][0-9]{9}$/
        .test(phone);

}


/* =====================================================
   REGISTRATION
===================================================== */

registrationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        clearErrors();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const roll =
            document
                .getElementById("roll")
                .value
                .trim();


        const department =
            document
                .getElementById("department")
                .value;


        const year =
            document
                .getElementById("year")
                .value;


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const phone =
            document
                .getElementById("phone")
                .value
                .trim();


        const eventId =
            Number(
                eventSelect.value
            );


        let valid = true;


        if (name === "") {

            showError(
                "name",
                "Please enter your name."
            );

            valid = false;

        }


        if (roll === "") {

            showError(
                "roll",
                "Please enter your roll number."
            );

            valid = false;

        }


        if (department === "") {

            showError(
                "department",
                "Please select your department."
            );

            valid = false;

        }


        if (year === "") {

            showError(
                "year",
                "Please select your year."
            );

            valid = false;

        }


        if (email === "") {

            showError(
                "email",
                "Please enter your email."
            );

            valid = false;

        }
        else if (
            !validEmail(email)
        ) {

            showError(
                "email",
                "Enter a valid email address."
            );

            valid = false;

        }


        if (phone === "") {

            showError(
                "phone",
                "Please enter your phone number."
            );

            valid = false;

        }
        else if (
            !validPhone(phone)
        ) {

            showError(
                "phone",
                "Enter a valid 10-digit phone number."
            );

            valid = false;

        }


        if (!eventId) {

            showError(
                "event",
                "Please select an event."
            );

            valid = false;

        }


        if (!valid) {

            formMessage.textContent =
                "❌ Please correct the highlighted fields.";

            formMessage.classList.add(
                "error-message"
            );

            return;
        }


        const selectedEvent =
            events.find(function(event) {

                return event.id ===
                    eventId;

            });


        const duplicate =
            registrations.some(
                function(registration) {

                    return (
                        registration.roll
                            .toLowerCase() ===
                        roll.toLowerCase() &&

                        registration.eventId ===
                        eventId
                    );

                }
            );


        if (duplicate) {

            formMessage.textContent =
                "⚠️ You are already registered for this event.";

            formMessage.classList.add(
                "error-message"
            );

            return;
        }


        const registration = {

            id: Date.now(),

            name: name,

            roll: roll,

            department: department,

            year: year,

            email: email,

            phone: phone,

            eventId: selectedEvent.id,

            eventName:
                selectedEvent.name,

            eventDate:
                selectedEvent.date,

            eventTime:
                selectedEvent.time,

            venue:
                selectedEvent.venue,

            coordinator:
                selectedEvent.coordinator,

            whatsapp:
                selectedEvent.whatsapp,

            excel:
                selectedEvent.excel

        };


        registrations.push(
            registration
        );


        localStorage.setItem(
            "campusRegistrations",
            JSON.stringify(
                registrations
            )
        );


        formMessage.textContent =
            `✅ Successfully registered for ${selectedEvent.name}!`;

        formMessage.classList.add(
            "success-message"
        );


        renderRegistrations();


        registrationForm.reset();


        setTimeout(
            function() {

                document
                    .getElementById(
                        "my-registrations"
                    )
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            },
            700
        );

    }
);


/* =====================================================
   MY REGISTRATIONS
===================================================== */

function renderRegistrations() {

    registrationList.innerHTML = "";


    if (
        registrations.length === 0
    ) {

        registrationList.innerHTML = `

            <div class="empty-registration">

                <span>
                    📭
                </span>

                <h3>
                    No Registrations Yet
                </h3>

                <p>
                    Register for an event to
                    see your registration here.
                </p>

            </div>

        `;

        updateCounters();

        return;
    }


    registrations.forEach(
        function(registration) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "registration-card";


            card.innerHTML = `

                <div class="registration-card-header">

                    <span class="registration-category">
                        ✓ REGISTERED
                    </span>

                    <span class="registration-id">
                        #${registration.id}
                    </span>

                </div>


                <h3>
                    ${registration.eventName}
                </h3>


                <div class="registration-details">

                    <p>
                        👤 <strong>Name:</strong>
                        ${registration.name}
                    </p>

                    <p>
                        🎓 <strong>Roll:</strong>
                        ${registration.roll}
                    </p>

                    <p>
                        🏫 <strong>Department:</strong>
                        ${registration.department}
                    </p>

                    <p>
                        📚 <strong>Year:</strong>
                        ${registration.year}
                    </p>

                    <p>
                        📅 <strong>Date:</strong>
                        ${formatDate(
                            registration.eventDate
                        )}
                    </p>

                    <p>
                        ⏰ <strong>Time:</strong>
                        ${registration.eventTime}
                    </p>

                    <p>
                        📍 <strong>Venue:</strong>
                        ${registration.venue}
                    </p>

                    <p>
                        👤 <strong>Coordinator:</strong>
                        ${registration.coordinator}
                    </p>

                </div>


                <div class="registration-links">

                    <a
                        href="${registration.whatsapp}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="whatsapp-link">

                        💬 WhatsApp Group

                    </a>


                    <a
                        href="${registration.excel}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="excel-link">

                        📊 Excel Sheet

                    </a>

                </div>


                <button
                    type="button"
                    class="remove-registration"
                    data-registration-id="${registration.id}">

                    Cancel Registration

                </button>

            `;


            registrationList.appendChild(
                card
            );

        }
    );


    addRemoveListeners();

    updateCounters();
}


/* =====================================================
   REMOVE REGISTRATION
===================================================== */

function addRemoveListeners() {

    document
        .querySelectorAll(
            ".remove-registration"
        )
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    const id =
                        Number(
                            button.dataset
                                .registrationId
                        );


                    const confirmed =
                        confirm(
                            "Cancel this registration?"
                        );


                    if (!confirmed) {
                        return;
                    }


                    registrations =
                        registrations.filter(
                            function(registration) {

                                return (
                                    registration.id !==
                                    id
                                );

                            }
                        );


                    localStorage.setItem(
                        "campusRegistrations",
                        JSON.stringify(
                            registrations
                        )
                    );


                    renderRegistrations();

                }
            );

        });

}


/* =====================================================
   COUNTERS
===================================================== */

function updateCounters() {

    participatedCount.textContent =
        registrations.length;


    registrationCount.textContent =
        registrations.length;


    conductedCount.textContent =
        events.length;

}


/* =====================================================
   COUNTDOWN
===================================================== */

function getNextEvent() {

    const now =
        new Date();


    return events
        .filter(function(event) {

            return new Date(
                event.date +
                "T23:59:59"
            ) > now;

        })
        .sort(function(a, b) {

            return new Date(a.date) -
                new Date(b.date);

        })[0];

}


function updateCountdown() {

    const nextEvent =
        getNextEvent();


    if (!nextEvent) {

        countdown.textContent =
            "No upcoming events";

        return;
    }


    const target =
        new Date(
            nextEvent.date +
            "T09:00:00"
        );


    const now =
        new Date();


    const difference =
        target - now;


    if (difference <= 0) {

        countdown.textContent =
            `${nextEvent.name} is happening today!`;

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) %
            24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) %
            60
        );


    const seconds =
        Math.floor(
            (difference /
                1000) %
            60
        );


    countdown.textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

}


setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   PHONE INPUT
===================================================== */

document
    .getElementById("phone")
    .addEventListener(
        "input",
        function() {

            this.value =
                this.value
                    .replace(/\D/g, "")
                    .slice(0, 10);

        }
    );


/* =====================================================
   INITIALIZE
===================================================== */

function initializeApp() {

    renderEventDropdown();

    renderEvents(events);

    renderRegistrations();

    updateCounters();

    updateCountdown();

}


initializeApp();