
class App {
    static DOAMIN_SERVER = "http://localhost:3009";
    static CUSTOMER_API = this.DOAMIN_SERVER + "/customers";
    static DEPOSIT_API = this.DOAMIN_SERVER + "/deposits";
    static WITHDRAW_API = this.DOAMIN_SERVER + "/withdraws";
    static TRANSFER_API = this.DOAMIN_SERVER + "/transfers";

    static AlertMessageVi = class {
        static SUCCESS_CREATED = "Tạo dữ liệu thành công !";
        static SUCCESS_UPDATED = "Cập nhật dữ liệu thành công !";
        static SUCCESS_DEPOSIT = "Giao dịch gửi tiền thành công !";
        static SUCCESS_WITHDRAW = "Giao dịch rút tiền thành công !";
        static SUCCESS_TRANSFER = "Giao dịch chuyển khoản thành công !";
        static SUCCESS_DEACTIVATE = "Hủy kích hoạt khách hàng thành công !";

        static ERROR_400 = "Thao tác không thành công, vui lòng kiểm tra lại dữ liệu.";
        static ERROR_401 = "Unauthorized - Access Token của bạn hết hạn hoặc không hợp lệ.";
        static ERROR_403 = "Forbidden - Bạn không được quyền truy cập tài nguyên này.";
        static ERROR_404 = "Not Found - Tài nguyên này đã bị xóa hoặc không tồn tại";
        static ERROR_500 = "Internal Server Error - Hệ thống Server đang có vấn đề hoặc không truy cập được.";

        static ERROR_LOADING_PROVINCE = "Tải danh sách tỉnh - thành phố không thành công !";
        static ERROR_LOADING_DISTRICT = "Tải danh sách quận - phường - huyện không thành công !";
        static ERROR_LOADING_WARD = "Tải danh sách phường - xã - thị trấn không thành công !";
    }

    static SweetAlert = class {

        static showAlertSuccess(t) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: t,
                showConfirmButton: false,
                timer: 1500
            })
        }

        static showAlertError(t) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: t,
                showConfirmButton: true
            })
        }

        static showSuspendedConfirmDialog() {
            return Swal.fire({
                icon: 'warning',
                text: 'Are you sure to suspend the selected customer ?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, please suspend this client !',
                cancelButtonText: 'Cancel',
            })
        }
    }
}
class Customer {
    constructor(id, fullName, email, phone, address, balance, deleted) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.balance = balance;
        this.deleted = deleted;
    }
}

class Deposit {
    constructor(id,transactionAmount,customerId) {
        this.id = id;
        this.transactionAmount = transactionAmount;
        this.customerId = customerId;
    }
}
class Withdraw {
    constructor(id,transactionAmount,customerId) {
        this.id = id;
        this.transactionAmount = transactionAmount;
        this.customerId = customerId;
    }
}
class Transfer {
    constructor(id,senderId,recipientId,fees,feesAmount,transferAmount,transactionAmount) {
        this.id = id;
        this.senderId = senderId;
        this.recipientId = recipientId;
        this.fees = fees;
        this.feesAmount = feesAmount;
        this.transferAmount = transferAmount;
        this.transactionAmount = transactionAmount;
    }
}