Phần 2: Trang quản trị
1.1 Sử dụng Axios để call API, xây dựng các chức năng cho admin
Gợi ý cách làm:
+Biết URL
+Xem code thầy
Đại loại
File 1: Có 5 method: GET, POST, PUT, DELETE, GET BY ID
Import Axios CDN vô file HTML

1.2 Hiện danh sách sản phẩm
 - Tạo lớp đối tượng product và Product list
   Thuộc tính bao gồm 
    "id": "12",
    "name": "Iphone 15",
    "price": 100000,
    "screen": "screen 62",
    "backCamera": "Camera: Chính 12 MP",
    "frontCamera": "7 MP",
    "img": "ip15.jpg",
    "desc": "Thiết kế nhỏ gọn, giá hợp lý",
    "type": "Iphone" + Samsung
- Gọi API get List để lấy danh sách hiển thị ra 
- Hiển thị ra màn hình, với mỗi record thêm element cho button edit (onclick event) + delete(onclick event)

1.3 Thêm sản phẩm
- Lấy Input từ người dùng
- Gọi API Post và truyền data tương ứng với Input của người dùng
- Khi đăng kí thành công thì tắt modal đi + reload lại list (gọi lại API Get List)
1.4 Xóa sản phẩm
- Truyền id vào để delete sp tương ứng
1.5 Cập nhật sản phẩm
- Mở modal và hiện data của id sản phẩm đó

2. Kiểm tra validation
- Check requried, min max
3. Tìm kiếm sản phẩm theo tên
- Tạo function và truyền tên vào

4. Sắp xếp sản phẩm theo giá tiền (từ lớn đến bé, và ngược lại)
 for tất cả record, hoán vị 