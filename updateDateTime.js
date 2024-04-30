function updateDateTime() {
    const currentDateTimeElement = document.getElementById('currentDateTime');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedDateTime = currentDate.toLocaleDateString('en-US', options);
    currentDateTimeElement.textContent = formattedDateTime;
}

// Gọi hàm để cập nhật ngày và giờ mỗi giây
setInterval(updateDateTime, 1000);
