import React from 'react'

function AccountManage() {
    return (
        <div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <h3>Danh sách đơn giặt</h3>
                        <hr />
                        <div class="bootstrap-data-table-panel">
                            <div class="dataTables_filter">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead class="table-info">
                                            <tr>
                                                <td>
                                                    ID
                                                </td>
                                                <td>
                                                    Tên khách hàng
                                                </td>
                                                <td>
                                                    Khối lượng tổng
                                                </td>
                                                <td>
                                                    Tổng tiền đơn giặt
                                                </td>
                                                <td>
                                                    Trạng thái
                                                </td>
                                                <td>
                                                    <a href="QLDonGiat-Form.html"
                                                        class="btn btn-rounded btn-secondary">Thêm
                                                        mới</a>
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr >
                                                <td>123</td>
                                                <td>123</td>
                                                <td>123</td>
                                                <td>123</td>
                                                <td>123</td>
                                                <td>
                                                    <a href="QLDonGiat-Form.html"
                                                        class="btn btn-rounded btn-warning">
                                                        Chỉnh sửa
                                                    </a>
                                                    <a href="" class="btn btn-rounded btn-danger"
                                                        onclick="return confirm('Bạn có chắc chắn xóa không?');">
                                                        Xóa
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- /# card --> */}
                </div>
                {/* <!-- /# column --> */}
            </div>
            {/* <!-- /# row --> */}

            <div class="row">
                <div class="col-lg-12">
                    <div class="footer">

                    </div>
                </div>
            </div>
        </div >
    )
}

export default AccountManage