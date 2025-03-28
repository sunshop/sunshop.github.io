document.querySelector('#orderForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Ngăn chặn hành động mặc định của form
  
  // Lấy giá trị từ các trường nhập liệu
  var name = document.querySelector('input[name="name"]').value;
  var service = document.querySelector('input[name="service"]').value;
  var gameAccount = document.querySelector('input[name="gameAccount"]').value;
  var gamePassword = document.querySelector('input[name="gamePassword"]').value;
  
  // Tạo tin nhắn
  var message = `Tên khách hàng: ${name}\nĐơn: ${service}\nTên tài khoản game: ${gameAccount}\nMật khẩu game: ${gamePassword}`;
  var encodedMessage = encodeURIComponent(message); // Mã hóa tin nhắn để sử dụng trong URL
  
  // Tạo URL đến Facebook Messenger
  var facebookUrl = `https://m.me/profile.php?id=61560419824346?text=${encodedMessage}`;
  
  // Chuyển hướng đến Facebook Messenger
  window.location.href = facebookUrl;
});

document.getElementById('service-select').addEventListener('change', function() {
    var selectedValue = this.value;
    console.log('Gói đã chọn:', selectedValue);
    // Thực hiện hành động khác nếu cần
});
