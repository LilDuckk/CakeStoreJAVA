package com.TiemBanhJava.Models;

import java.util.Set;

public class OrderStatus {
    public static final String PENDING = "Chuẩn bị";
    public static final String PROCESSING = "Xử lý";
    public static final String SHIPPED = "Xác nhận đã nhận được hàng";
    public static final String DELIVERED = "Đang giao hàng";
    public static final String CANCELLED = "Hủy đơn hàng";
    public static final Set<String> VALID_STATUSES = Set.of(PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED);
}