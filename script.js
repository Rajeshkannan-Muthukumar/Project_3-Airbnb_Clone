// Calender constraints
function openDatePicker(id) {
    document.getElementById(id).showPicker();
}

document.addEventListener('DOMContentLoaded', function() {
    const checkinInput = document.getElementById('check-in');
    const checkoutInput = document.getElementById('check-out');

    checkinInput.addEventListener('change', validateDates);
    checkoutInput.addEventListener('change', validateDates);

    function validateDates() {
        const checkinDate = new Date(checkinInput.value);
        const checkoutDate = new Date(checkoutInput.value);


        if (checkoutDate < checkinDate) {
            alert('Check-out date cannot be before check-in date.');
            checkoutInput.value = ''; 
        }
    }
});

//Guest DropDown
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function increment(id) {
    const countElement = document.getElementById(id);
    let count = parseInt(countElement.innerText);
    countElement.innerText = ++count;
    checkTotalGuests();
}

function decrement(id) {
    const countElement = document.getElementById(id);
    let count = parseInt(countElement.innerText);
    if (count > 0) {
        countElement.innerText = --count;
    }
    checkTotalGuests();
}

function checkTotalGuests() {
    const adultCount = parseInt(document.getElementById('adultCount').innerText);
    const childCount = parseInt(document.getElementById('childCount').innerText);
    const infantCount = parseInt(document.getElementById('infantCount').innerText);
    const petCount = parseInt(document.getElementById('petCount').innerText);

    const totalGuests = adultCount + childCount + infantCount + petCount;
    if (totalGuests >= 10) {
        alert('The total number of guests cannot exceed 10.');
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.Guest') && !event.target.closest('.dropdown-content')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}