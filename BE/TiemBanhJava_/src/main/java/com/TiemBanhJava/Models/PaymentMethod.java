package com.TiemBanhJava.Models;

import java.util.Set;

public class PaymentMethod {
    public static final String CreditCard = "Chuyển khoản";
    public static final String PayCash = "Trả tiền khi nhận được hàng";
    public static final Set<String> VALID_STATUSES = Set.of(CreditCard, PayCash);
}
