// // Calender constraints
// function openDatePicker(id) {
//     document.getElementById(id).showPicker();
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const checkinInput = document.getElementById('check-in');
//     const checkoutInput = document.getElementById('check-out');

//     checkinInput.addEventListener('change', validateDates);
//     checkoutInput.addEventListener('change', validateDates);

//     function validateDates() {
//         const checkinDate = new Date(checkinInput.value);
//         const checkoutDate = new Date(checkoutInput.value);


//         if (checkoutDate < checkinDate) {
//             alert('Check-out date cannot be before check-in date.');
//             checkoutInput.value = ''; 
//         }
//     }
// });

// //Guest DropDown
// function toggleDropdown() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// function increment(id) {
//     const countElement = document.getElementById(id);
//     let count = parseInt(countElement.innerText);
//     countElement.innerText = ++count;
//     checkTotalGuests();
// }

// function decrement(id) {
//     const countElement = document.getElementById(id);
//     let count = parseInt(countElement.innerText);
//     if (count > 0) {
//         countElement.innerText = --count;
//     }
//     checkTotalGuests();
// }


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

$(document).ready(function() {
    $("#checkinButton").click(function() {
        $("#checkinDate").datepicker("show");
    });
    $("#checkinDate").datepicker({
        dateFormat: "mm/dd/yy",
        minDate: 0, // Set the minimum date to today
        onSelect: function(dateText) {
            $("#checkinButton").text("Check-in: " + dateText);
            checkSameDate();
        }
    });
    
    $("#checkoutButton").click(function() {
        $("#checkoutDate").datepicker("show");
    });
    $("#checkoutDate").datepicker({
        dateFormat: "mm/dd/yy",
        minDate: 0, // Set the minimum date to today
        onSelect: function(dateText) {
            $("#checkoutButton").text("Check-Out: " + dateText);
            checkSameDate();
        }
    });

    function checkSameDate() {
        var checkinDate = $("#checkinDate").datepicker("getDate");
        var checkoutDate = $("#checkoutDate").datepicker("getDate");
        
        if (checkinDate && checkoutDate && checkinDate.getTime() === checkoutDate.getTime()) {
            alert("Check-in and Check-Out dates cannot be the same.");
        }
    }
});


// Toggle dropdown menu on profile icon click
$("#profileIcon").click(function(event) {
    event.stopPropagation();
    $("#profileDropdown").toggle();
});

// Close dropdown if clicked outside
$(document).click(function() {
    $("#profileDropdown").hide();
});

// Prevent closing the dropdown when clicking inside
$("#profileDropdown").click(function(event) {
    event.stopPropagation();
});

// Show signup modal
$("#signupLink").click(function(event) {
    event.preventDefault();
    $("#signupModal").show();
});

// Close modal when clicking the close button
// $(".close").click(function() {
//     $("#signupModal").hide();
// });

// Close modal when clicking outside the modal content
$(window).click(function(event) {
    if (event.target == document.getElementById("signupModal")) {
        $("#signupModal").hide();
    }
});

// $(document).ready(function() {
//     $('#guestButton').click(function() {
//         $('#guestDropdown').toggle();
//     });

//     $('.counter-btn').click(function() {
//         var type = $(this).data('type');
//         var $counter = $('#' + type + 'Count');
//         var count = parseInt($counter.text());

//         if ($(this).hasClass('plus')) {
//             count++;
//         } else {
//             if (count > 0) {
//                 count--;
//             }
//         }

//         $counter.text(count);
//     });
// });

$(document).ready(function() {
    $('#guestButton').click(function() {
        $('#guestDropdown').toggle();
    });

    $('.counter-btn').click(function() {
        var type = $(this).data('type');
        var $counter = $('#' + type + 'Count');
        var count = parseInt($counter.text());

        if ($(this).hasClass('plus')) {
            count++;
        } else {
            if (count > 0) {
                count--;
            }
        }

        $counter.text(count);

        // Check total guest count
        checkTotalCount();
    });

    function checkTotalCount() {
        var total = 0;
        $('#guestDropdown span').each(function() {
            total += parseInt($(this).text());
        });

        if (total > 10) {
            alert("Total guests cannot exceed 10.");
        }
    }
});
