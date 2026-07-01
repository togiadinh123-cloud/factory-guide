// ========== E2E DIGITAL SYSTEM GUIDE - APP.JS ==========

// ========== DATA: All factory processes ==========
const PROCESSES_DATA = {
    // =============== OVERVIEW ===============
    "overview": {
        title: "Tổng Quan Hệ Thống E2E Digital",
        breadcrumb: "Tổng Quan Hệ Thống",
        type: "overview"
    },

    // =============== MATERIAL WAREHOUSE ===============
    "material-warehouse": {
        title: "Kho Nguyên Vật Liệu (Material Warehouse)",
        breadcrumb: "Kho Nguyên Vật Liệu",
        image: "images/material_warehouse.png",
        description: "Kho Nguyên Vật Liệu là điểm khởi đầu của toàn bộ quy trình sản xuất giày. Tại đây, tất cả nguyên vật liệu (vải, da, phụ kiện) được tiếp nhận, kiểm tra chất lượng, đăng ký vào hệ thống Kanban và phân phối đến các xưởng sản xuất.",
        area: "Material Warehouse",
        factory: "ALL FTY (LHG, LVL, LYV, LYM)",
        systems: ["MES Digital Warehouse", "Kanban Online Material Registration", "Kanban Material Calling", "RFID Hangtag Binding System", "ERP T2/T3 Supplier Analysis", "Material QC Check"],
        machines: [
            { icon: "🖥️", name: "MES Digital Warehouse", desc: "Hệ thống quản lý kho nguyên vật liệu số hóa" },
            { icon: "📱", name: "Kanban Scanner", desc: "Máy quét mã vạch/QR để gọi vật liệu" },
            { icon: "🏷️", name: "RFID Hangtag Printer", desc: "Máy in và gắn thẻ RFID lên vật liệu" },
            { icon: "💻", name: "ERP Terminal", desc: "Thiết bị đầu cuối truy cập hệ thống ERP" }
        ],
        workflow: [
            { name: "Tiếp nhận NVL", current: true },
            { name: "Kiểm tra QC" },
            { name: "Đăng ký Kanban" },
            { name: "Lưu kho" },
            { name: "Gọi vật liệu" },
            { name: "→ Xưởng Cắt" }
        ],
        steps: [
            {
                title: "Tiếp nhận Nguyên Vật Liệu",
                subtitle: "Nhận hàng từ nhà cung cấp",
                description: "Khi nguyên vật liệu (vải, da, phụ kiện...) được giao đến nhà máy, nhân viên kho sẽ tiếp nhận và ghi nhận vào hệ thống <strong>MES Digital Warehouse</strong>.",
                details: [
                    "Nhân viên kho nhận hàng tại cổng giao nhận",
                    "Quét mã vạch trên kiện hàng để ghi nhận vào hệ thống MES",
                    "Hệ thống tự động đối chiếu với PO (Purchase Order) đã đặt",
                    "Phân loại vật liệu: Vải (Raw Material), Da (Leather), Phụ kiện (Accessories), Gia công ngoài (Outsourcing)"
                ],
                result: "Vật liệu được ghi nhận vào hệ thống MES Digital Warehouse, hiển thị số lượng nhận thực tế so với số lượng đặt hàng.",
                nextProcess: "Chuyển sang bước Kiểm tra Chất lượng (QC Check)"
            },
            {
                title: "Kiểm Tra Chất Lượng (Material QC Check)",
                subtitle: "Đảm bảo chất lượng đầu vào",
                description: "Tất cả nguyên vật liệu phải qua kiểm tra chất lượng trước khi nhập kho. Hệ thống <strong>QC Check</strong> trên ERP được sử dụng để ghi nhận kết quả kiểm tra.",
                details: [
                    "Nhân viên QC kiểm tra mẫu vật liệu theo tiêu chuẩn",
                    "Ghi nhận kết quả vào ERP-QIP: Pass / Fail / Chờ Lab Test",
                    "Vải tổng hợp, phụ kiện: kiểm tra theo ERP-QIP-N16",
                    "Da (Leather): kiểm tra theo ERP-QIP-N15 với tiêu chuẩn riêng",
                    "Nếu Fail: Trả lại nhà cung cấp hoặc escalation"
                ],
                result: "Dashboard Material Warehouse hiển thị trạng thái QC: Pass (xanh), Fail (đỏ), Đang kiểm tra (vàng), Chờ lab (xám). Thống kê Top 3 nhà cung cấp lỗi nhiều nhất.",
                nextProcess: "Nếu Pass → Đăng ký vào hệ thống Kanban"
            },
            {
                title: "Đăng Ký Kanban Online (Material Registration)",
                subtitle: "Nhập liệu vào hệ thống Kanban quản lý",
                description: "Sau khi QC Pass, vật liệu được đăng ký vào hệ thống <strong>Kanban Online Material Registration</strong> tại khu vực văn phòng kho. Áp dụng cho nhà máy LHG và LVL.",
                details: [
                    "Truy cập hệ thống EIP → Module Kanban Registration",
                    "Nhập thông tin: Mã vật liệu, RY, số lượng, vị trí kho",
                    "Hệ thống gắn mã Kanban cho mỗi lô vật liệu",
                    "Vật liệu sẵn sàng để các xưởng sản xuất gọi lấy"
                ],
                result: "Vật liệu xuất hiện trong hệ thống Kanban, sẵn sàng để các bộ phận sản xuất gọi vật liệu (Material Calling).",
                nextProcess: "Chờ yêu cầu gọi vật liệu từ Xưởng Cắt, Xưởng May"
            },
            {
                title: "Gọi Vật Liệu (Kanban Material Calling)",
                subtitle: "Xưởng sản xuất yêu cầu cấp vật liệu",
                description: "Khi xưởng sản xuất cần vật liệu, họ sử dụng hệ thống <strong>Kanban Material Calling</strong> để gửi yêu cầu đến kho. Kho sẽ chuẩn bị và giao vật liệu trong vòng 2 giờ.",
                details: [
                    "Xưởng Cắt / Xưởng May truy cập hệ thống Kanban Calling",
                    "Chọn loại vật liệu cần, số lượng và RY liên quan",
                    "Gửi yêu cầu → Hệ thống thông báo đến nhân viên kho",
                    "Nhân viên kho chuẩn bị và giao vật liệu đến khu vực giao nhận",
                    "Dashboard Kanban hiển thị trạng thái: Trắng (chưa gọi), Vàng (đang chuẩn bị), Xanh (đã giao)"
                ],
                result: "Vật liệu được giao đến xưởng sản xuất. Trạng thái cập nhật trên Dashboard Material Warehouse (Daily Kanban Status).",
                nextProcess: "Vật liệu đến → Xưởng Cắt (Auto Cutting / Semi-Auto / Inline / Centralized)"
            }
        ],
        roles: [
            { role: "System Owner", dept: "Digital Team", responsibility: "Đào tạo, triển khai, giám sát sử dụng hệ thống" },
            { role: "System Developer", dept: "LHG IT Team", responsibility: "Phát triển hệ thống, sửa lỗi khi có vấn đề" },
            { role: "User", dept: "Nhân viên kho", responsibility: "Sử dụng hệ thống theo SOP, báo lỗi" },
            { role: "Monitor", dept: "FME-Digital PIC", responsibility: "Đào tạo, giám sát, escalate vấn đề" }
        ]
    },

    // =============== CUTTING ===============
    "cutting": {
        title: "Xưởng Cắt (Cutting & Treatment)",
        breadcrumb: "Xưởng Cắt",
        image: "images/cutting_area.png",
        description: "Xưởng Cắt là nơi nguyên vật liệu được cắt thành các chi tiết (components) theo mẫu thiết kế. Có 4 loại cắt: Auto Cutting (máy cắt tự động), Semi-Auto Cutting, Centralized Cutting và Inline Cutting. Sau đó chuyển qua xử lý (Treatment): In, Ép nhiệt (High Frequency), Nosew.",
        area: "Cutting & Treatment Area",
        factory: "ALL FTY",
        systems: ["Auto Cutting Barcode Job Ticket", "PO Tracking (ERP/PLAN/N5J Report)", "Material Application", "Emma Machine Dashboard", "Kanban Material Registration/Calling"],
        machines: [
            { icon: "⚙️", name: "Máy Cắt Tự Động (Auto Cutting)", desc: "Máy CNC cắt vật liệu theo file thiết kế, sử dụng Job Ticket mã vạch" },
            { icon: "✂️", name: "Máy Cắt Bán Tự Động (Semi-Auto)", desc: "Máy cắt kết hợp thủ công và tự động" },
            { icon: "🖨️", name: "Emma Machine", desc: "Máy cắt Emma có dashboard OEE riêng theo dõi hiệu suất" },
            { icon: "🔥", name: "Máy Ép Nhiệt (High Frequency)", desc: "Máy xử lý ép nhiệt cho các chi tiết đặc biệt" },
            { icon: "🖼️", name: "Máy In (Printing)", desc: "Máy in hoa văn, logo lên các chi tiết giày" },
            { icon: "📄", name: "Máy In Job Ticket", desc: "In phiếu công việc có mã vạch cho mỗi lệnh cắt" }
        ],
        workflow: [
            { name: "Kho NVL" },
            { name: "Nhận NVL", current: true },
            { name: "Tạo Job Ticket" },
            { name: "Cắt vật liệu" },
            { name: "Treatment" },
            { name: "→ Xưởng May" }
        ],
        steps: [
            {
                title: "Tạo Auto Cutting Barcode Job Ticket",
                subtitle: "Tạo phiếu lệnh cắt có mã vạch trong ERP",
                description: "Trước khi cắt, cần tạo <strong>Job Ticket</strong> (phiếu lệnh cắt) trên hệ thống ERP. Phiếu này chứa thông tin RY, article, component, kích cỡ và mã vạch để truy xuất.",
                details: [
                    "Đăng nhập ERP → Pro Plan → N2 Prod → N22 Prod Send → N228 → N2281 Auto Cutting Barcode",
                    "Bảng trên-trái: Nhập thông tin chung - Ngày làm việc (WorkDate), Số lớp cắt (Cutting Layers), Ca làm việc (Working Shift), Mã máy (Machine Code), Article",
                    "Bảng trên-phải: Thêm Component (chi tiết) và Material (vật liệu) cần cắt",
                    "Bảng dưới-trái: Thêm RY cần chạy, nhập số lượng vật liệu sử dụng",
                    "Bảng kích cỡ (Size Chart) tự động xuất hiện, có thể điều chỉnh cho shared cutting",
                    "Nhấn Print để in Job Ticket ra có mã vạch"
                ],
                result: "Job Ticket được in ra với mã vạch, chứa thông tin: Ngày, Ca, Máy, Article, RY, Component, Kích cỡ. Mã vạch này sẽ được quét khi chạy máy cắt.",
                nextProcess: "Đưa Job Ticket ra máy cắt để bắt đầu cắt vật liệu"
            },
            {
                title: "Vận Hành Máy Cắt (Auto Cutting)",
                subtitle: "Cắt vật liệu bằng máy tự động theo Job Ticket",
                description: "Operator tại máy cắt quét mã vạch trên Job Ticket, máy sẽ tải file cắt tương ứng. Đặt vật liệu lên bàn cắt và khởi động máy. Hệ thống <strong>Material Application</strong> theo dõi vật liệu sử dụng thực tế.",
                details: [
                    "Quét mã vạch Job Ticket bằng scanner gắn trên máy",
                    "Hệ thống liên kết với file cắt CAD đã thiết kế sẵn",
                    "Đặt vật liệu (vải/da) lên bàn cắt, căn chỉnh theo đúng hướng",
                    "Máy tự động cắt theo pattern đã lập trình",
                    "Với máy Emma: Dashboard OEE theo dõi Availability, Performance, Quality",
                    "Ghi nhận số lượng thực cắt, phế liệu (defects) vào hệ thống"
                ],
                result: "Các chi tiết (components) được cắt xong. Dashboard Auto Cutting hiển thị: OEE từng máy, Downtime, Output theo ca/ngày/tuần/tháng. Emma Dashboard hiển thị chi tiết A×P×Q.",
                nextProcess: "Chi tiết cắt xong → Chuyển sang Treatment (xử lý) hoặc trực tiếp đến Xưởng May"
            },
            {
                title: "Xử Lý Treatment (Printing, Nosew, High Frequency)",
                subtitle: "Xử lý hoàn thiện chi tiết trước khi may",
                description: "Các chi tiết sau khi cắt có thể cần qua công đoạn <strong>Treatment</strong>: In (Printing), Ép nhiệt (High Frequency), hoặc Nosew. Tiến độ được theo dõi qua <strong>PO Tracking (ERP/PLAN/N5J Report)</strong>.",
                details: [
                    "Chi tiết cần in hoa văn → Chuyển sang máy Printing",
                    "Chi tiết cần ép nhiệt → Chuyển sang máy High Frequency",
                    "Chi tiết Nosew → Xử lý bằng công nghệ không may",
                    "Hệ thống PO Tracking theo dõi tiến độ hoàn thành từng RY",
                    "Tất cả dữ liệu được tích hợp vào EIP/Production"
                ],
                result: "Tất cả chi tiết đã hoàn thành Treatment, sẵn sàng chuyển sang Xưởng May. PO Tracking cập nhật trạng thái hoàn thành cho mỗi RY.",
                nextProcess: "Chi tiết hoàn chỉnh → Xưởng May (Stitching) để ráp thành Upper giày"
            }
        ],
        roles: [
            { role: "System Owner", dept: "Digital Team", responsibility: "Đào tạo, triển khai, phối hợp IT cập nhật" },
            { role: "System Developer", dept: "LHG-Vu", responsibility: "Phát triển hệ thống Job Ticket, sửa lỗi" },
            { role: "User", dept: "ALL FTY - Auto Cutting", responsibility: "Sử dụng theo SOP, báo cáo vấn đề" },
            { role: "Monitor", dept: "FME-Digital PIC", responsibility: "Đào tạo, giám sát, escalate" }
        ]
    },

    // =============== STITCHING ===============
    "stitching": {
        title: "Xưởng May (Stitching)",
        breadcrumb: "Xưởng May",
        image: "images/stitching_line.png",
        description: "Xưởng May là nơi các chi tiết đã cắt được ráp lại thành phần Upper (thân giày) hoàn chỉnh. Mỗi chuyền may (line) có nhiều trạm làm việc với máy may công nghiệp. Sản lượng được ghi nhận theo giờ qua ứng dụng Production Input.",
        area: "Stitching Area",
        factory: "LHG | LVL | LYM",
        systems: ["Production Input Stitching App", "Quick Change Over (QCO)", "Line Calling System", "EIP/ME/PPH/Hourly Output", "KPI Dashboard"],
        machines: [
            { icon: "🧵", name: "Máy May Công Nghiệp", desc: "Máy may các chi tiết Upper giày, nhiều loại khác nhau" },
            { icon: "📱", name: "Tablet/Phone Production Input", desc: "Thiết bị di động chạy app ghi nhận sản lượng" },
            { icon: "📺", name: "KPI Monitor (Màn hình)", desc: "Màn hình hiển thị KPI sản xuất real-time tại mỗi chuyền" },
            { icon: "🔔", name: "Hệ thống Calling", desc: "Hệ thống gọi vật liệu từ Supermarket đến chuyền" }
        ],
        workflow: [
            { name: "Xưởng Cắt" },
            { name: "Nhận chi tiết", current: true },
            { name: "Sắp xếp RY" },
            { name: "May Upper" },
            { name: "Xác nhận Output" },
            { name: "→ Assembly" }
        ],
        steps: [
            {
                title: "Đăng Nhập & Thiết Lập Chuyền",
                subtitle: "Mở ứng dụng Production Input trên thiết bị di động",
                description: "Đầu ca làm việc, Water Spider hoặc Line Leader mở ứng dụng <strong>Production Input</strong> trên tablet/phone, đăng nhập và thiết lập thông tin chuyền.",
                details: [
                    "Nhấn icon Production Input trên màn hình thiết bị",
                    "Chọn ngôn ngữ → Chọn nhà máy (LHG/LVL/LYM)",
                    "Nhập Username & Password được cấp",
                    "Chọn Operation: Stitching → Chọn Floor → Chọn Line",
                    "Lần đầu cần chọn; lần sau hệ thống tự nhớ thông tin",
                    "Phiên bản mới: vuốt trái để vào Production Input, vuốt phải để quay về Scanning PO"
                ],
                result: "Giao diện chính hiện ra với thông tin chuyền đã chọn. Sẵn sàng để thêm RY và bắt đầu ghi nhận sản lượng.",
                nextProcess: "Thêm RY sản xuất vào hệ thống"
            },
            {
                title: "Thêm RY & Ghi Nhận Sản Lượng",
                subtitle: "Chọn RY đang sản xuất và nhập output theo giờ",
                description: "Sau khi thiết lập chuyền, người dùng thêm các <strong>RY (mã đơn hàng)</strong> đang chạy trên chuyền. Mỗi giờ, ghi nhận số lượng sản xuất theo từng size.",
                details: [
                    "Phiên bản cũ: Hệ thống tự hiển thị popup RY theo kế hoạch, nhấn OK nếu đúng",
                    "Phiên bản mới: Tìm kiếm RY → Nhấn 'ADD TO QUEUE' → Nhấn nút Queue để vào giao diện nhập",
                    "Tại mỗi size: Nhấn nút '+1' để thêm 1 đôi, hoặc '+10' để thêm nhanh 10 đôi",
                    "Nhấn '-1' để trừ 1 đôi nếu nhập sai",
                    "Nền xanh lá = size chưa đạt target, Nền xanh lam = size đã hoàn thành",
                    "Cột 'Inp' hiển thị số lượng tạm (chưa xác nhận)"
                ],
                result: "Số lượng sản xuất được ghi nhận tạm thời (chưa confirm). Hiển thị target theo giờ, số lượng còn lại cần sản xuất.",
                nextProcess: "Xác nhận Output theo giờ"
            },
            {
                title: "Xác Nhận Output Theo Giờ (Output Confirmation)",
                subtitle: "Bắt buộc xác nhận sản lượng mỗi giờ",
                description: "Trước khi kết thúc mỗi giờ, <strong>phải xác nhận (Confirm)</strong> sản lượng. Nếu không đạt target, bắt buộc phải chọn lý do. Có chế độ Auto-Confirm tự động xác nhận phút thứ 28 mỗi giờ.",
                details: [
                    "Nhấn nút CONFIRM để mở giao diện xác nhận",
                    "Kiểm tra: Tổng số lượng chưa confirm, chi tiết theo RY và Size",
                    "Nếu chưa đạt target → Chọn lý do: Máy hỏng, Thiếu vật liệu, Thiếu nhân lực...",
                    "Nếu có lý do khác → Nhập text mô tả",
                    "Nhấn CONFIRM để xác nhận chính thức",
                    "Phiên bản mới: Có switch bật/tắt Auto-Confirm (tự xác nhận phút 28)",
                    "⚠️ Dữ liệu đã confirm KHÔNG THỂ CHỈNH SỬA bởi user"
                ],
                result: "Sản lượng được xác nhận chính thức, khóa lại và đồng bộ lên hệ thống EIP. Hiển thị trên KPI Dashboard real-time.",
                nextProcess: "Dữ liệu → Đồng bộ EIP PPH → Hiển thị KPI Dashboard. Upper hoàn chỉnh → Chuyển sang Assembly"
            },
            {
                title: "Xem Báo Cáo (Reports)",
                subtitle: "Theo dõi sản lượng theo Giờ/Ngày/RY",
                description: "Hệ thống cung cấp 3 loại báo cáo: <strong>Hourly Report</strong> (theo giờ), <strong>Daily Report</strong> (theo ngày), <strong>RY Report</strong> (theo đơn hàng). Có thể xuất Excel qua EIP.",
                details: [
                    "Nhấn nút Report để mở báo cáo",
                    "Hourly: Xem output từng khung giờ, target vs actual, lý do không đạt",
                    "Daily: Chọn ngày → Xem tổng sản lượng, chi tiết theo RY và Size",
                    "RY: Tìm RY cụ thể → Xem tiến độ hoàn thành",
                    "Xuất Excel: Truy cập EIP → Output Per Hour → Click Excel"
                ],
                result: "Báo cáo chi tiết giúp Line Leader, Supervisor và Management theo dõi năng suất và đưa ra quyết định kịp thời.",
                nextProcess: "Upper hoàn chỉnh → Đóng gói → Chuyển đến khu vực Assembly"
            }
        ],
        roles: [
            { role: "System Owner", dept: "Production & Planning", responsibility: "Kiểm soát tổng thể, phê duyệt thay đổi" },
            { role: "User", dept: "Operator / Water Spider", responsibility: "Nhập và xác nhận dữ liệu theo giờ" },
            { role: "Monitor", dept: "Line Leader / Supervisor", responsibility: "Giám sát nhập liệu, xác minh dữ liệu" },
            { role: "Admin", dept: "IT Team", responsibility: "Bảo trì hệ thống, quản lý quyền truy cập" },
            { role: "Report Recipient", dept: "Management Team", responsibility: "Xem báo cáo, tìm nguyên nhân, ra quyết định" }
        ]
    },

    // =============== OUTSOLE WAREHOUSE ===============
    "outsole-warehouse": {
        title: "Kho Đế Giày (Outsole Warehouse)",
        breadcrumb: "Kho Đế Giày",
        image: "images/outsole_warehouse.png",
        description: "Kho Đế Giày tiếp nhận và quản lý đế giày (outsole) từ nhà cung cấp hoặc từ xưởng Bottom sản xuất nội bộ. Hệ thống Incoming Outsole Material Entry ghi nhận số lượng nhập kho và tích hợp dữ liệu vào PO Tracking.",
        area: "Outsole Warehouse",
        factory: "LHG | LVL",
        systems: ["Incoming Outsole Material Entry", "QC Inspection Systems", "Inhouse Outsole Scanning", "PO Tracking"],
        machines: [
            { icon: "📱", name: "Tablet EIP", desc: "Thiết bị truy cập hệ thống EIP nhập liệu đế giày" },
            { icon: "🔍", name: "Thiết bị QC Inspection", desc: "Dụng cụ kiểm tra chất lượng đế giày" },
            { icon: "📊", name: "Barcode Scanner", desc: "Quét mã vạch trên đế giày inhouse" }
        ],
        workflow: [
            { name: "Nhà cung cấp / Bottom" },
            { name: "Nhận đế giày", current: true },
            { name: "QC Kiểm tra" },
            { name: "Nhập hệ thống" },
            { name: "Lưu kho" },
            { name: "→ Assembly" }
        ],
        steps: [
            {
                title: "Truy Cập Hệ Thống Incoming Outsole Material",
                subtitle: "Mở module Outsole Incoming Material trên EIP",
                description: "Truy cập trang EIP chính và điều hướng đến module <strong>Production → OUTSOLE INCOMING MATERIAL</strong>.",
                details: [
                    "LHG: Truy cập http://192.168.30.19/main_menu.php",
                    "LVL: Truy cập http://192.168.60.15/main_menu.php",
                    "Chọn module Production → OUTSOLE INCOMING MATERIAL",
                    "Giao diện hiển thị dữ liệu đế giày đã nhập theo ngày"
                ],
                result: "Giao diện Incoming Outsole Material mở ra, hiển thị bảng dữ liệu ngày hiện tại.",
                nextProcess: "Thêm dữ liệu nhận đế giày mới"
            },
            {
                title: "Nhập Dữ Liệu Đế Giày Nhận Về",
                subtitle: "Ghi nhận số lượng đế giày thực nhận",
                description: "Chọn ngày nhận hàng, tìm RY cần nhập, và ghi nhận số lượng thực nhận (<strong>Arrival Qty</strong>). Hệ thống tự tính số thiếu = Purchase Qty - Use Stock Qty - Arrival Qty.",
                details: [
                    "Chọn ngày mà đế giày đến (Date)",
                    "Nhấn 'Add New' để mở giao diện thêm mới",
                    "Tìm RY cần nhập trong thanh tìm kiếm",
                    "Hệ thống hiển thị: Outsole Usage (số cần), Purchase Qty, Use Stock Qty",
                    "Nhập Arrival Qty = Số lượng thực nhận",
                    "Lacking Qty = Purchase Qty - Use Stock Qty - Arrival Qty (tự tính)",
                    "Nhấn Save để lưu"
                ],
                result: "Dữ liệu đế giày được ghi nhận. Số lượng pairing (cặp đôi thành phần đế) được tích hợp vào PO Tracking → PO Completion.",
                nextProcess: "Dữ liệu tích hợp → EIP/Production/PO TRACKING hiển thị outsole component completion theo RY"
            }
        ],
        roles: [
            { role: "System Owner", dept: "Digital Team", responsibility: "Đào tạo, triển khai, phối hợp IT" },
            { role: "System Developer", dept: "LHG-Nhi", responsibility: "Phát triển, sửa lỗi hệ thống" },
            { role: "User", dept: "Outsole warehouse incoming area", responsibility: "Nhập liệu theo SOP, báo cáo vấn đề" }
        ]
    },

    // =============== LAST WAREHOUSE ===============
    "last-warehouse": {
        title: "Kho Phom Giày (Last Warehouse) - Hệ Thống RFID",
        breadcrumb: "Kho Phom Giày",
        image: "images/rfid_system.png",
        description: "Kho Phom (Last Warehouse) quản lý các phom giày (shoe lasts/molds) bằng công nghệ RFID. Mỗi phom được gắn chip RFID, cho phép quét nhanh khi mượn/trả, theo dõi tồn kho real-time và giám sát việc sử dụng phom tại chuyền Assembly.",
        area: "Last Warehouse",
        factory: "LHG",
        systems: ["RFID Last Scan App", "Last EIP System", "RFID Last Chiller Dashboard"],
        machines: [
            { icon: "📡", name: "RFID Handheld Scanner", desc: "Máy quét cầm tay đọc chip RFID trên phom giày" },
            { icon: "🏷️", name: "RFID Tags", desc: "Chip RFID gắn trên mỗi phom giày" },
            { icon: "💻", name: "EIP Last System", desc: "Hệ thống web quản lý phom trên EIP" },
            { icon: "📺", name: "Last Chiller Dashboard", desc: "Màn hình theo dõi real-time phom qua reader tại Assembly" }
        ],
        workflow: [
            { name: "Binding RFID", current: true },
            { name: "Lưu kho" },
            { name: "Quét mượn" },
            { name: "→ Assembly" },
            { name: "Sử dụng" },
            { name: "Quét trả" }
        ],
        steps: [
            {
                title: "Binding RFID cho Phom Giày Mới",
                subtitle: "Gắn mã RFID vào phom giày trong hệ thống",
                description: "Khi có phom mới, cần <strong>binding</strong> (liên kết) chip RFID với thông tin phom trong hệ thống. Sử dụng ứng dụng Last Warehouse Scan App trên máy quét.",
                details: [
                    "Mở ứng dụng Last System trên scanner → Đăng nhập",
                    "Chọn chức năng Binding → Chọn 'Bind New'",
                    "Tìm Last ID → Chọn Size → Chọn Side (Left/Right)",
                    "Nhấn Scan hoặc bóp trigger scanner → Quét chip RFID trên phom",
                    "Hệ thống kiểm tra EPC code: Proper (hợp lệ) hoặc Improper (cần quét lại)",
                    "Nhấn Complete → Binding thành công",
                    "Nếu cần sửa: Chọn 'Update Binding' → Thao tác tương tự"
                ],
                result: "Phom giày được liên kết với chip RFID trong hệ thống. Homepage hiển thị: Tổng RFID, Tổng tồn kho, Tổng loại phom. Có thể tìm kiếm theo Last Type.",
                nextProcess: "Phom sẵn sàng trong kho → Chờ chuyền Assembly mượn"
            },
            {
                title: "Quét Mượn Phom (Scan Borrow)",
                subtitle: "Chuyền Assembly mượn phom từ kho",
                description: "Khi chuyền Assembly cần phom, nhân viên kho quét <strong>Scan Borrow</strong> để ghi nhận mượn phom. Phiếu mượn tự động tạo trên EIP Last System.",
                details: [
                    "Vào Borrow/Return → Chọn Scan Borrow",
                    "Chọn bộ phận mượn (Borrowed Department)",
                    "Nhập ID leader bộ phận mượn",
                    "Nhấn Scan → Quét RFID tất cả phom cần mượn",
                    "Hệ thống kiểm tra: EPC hợp lệ + Cặp đôi đúng (Left, Right)",
                    "Nếu EPC no data → Cần binding trước rồi quét lại",
                    "Nhấn Complete → Phiếu mượn tạo tự động trên EIP"
                ],
                result: "Phiếu mượn phom được tạo trên EIP Last System. Dashboard cập nhật: Biểu đồ Tổng mượn vs Tồn kho, Số lượng mượn theo chuyền, Tỷ lệ sử dụng.",
                nextProcess: "Phom được chuyển đến chuyền Assembly để sử dụng"
            },
            {
                title: "Quét Trả Phom (Scan Return)",
                subtitle: "Trả phom về kho sau khi sử dụng xong",
                description: "Sau khi chuyền Assembly sử dụng xong, phom được trả về kho và quét <strong>Scan Return</strong>.",
                details: [
                    "Vào Borrow/Return → Chọn Scan Return",
                    "Chọn bộ phận trả (Return Department)",
                    "Nhập ID leader bộ phận trả",
                    "Nhấn Scan → Quét RFID tất cả phom trả về",
                    "Nhấn Complete → Return thành công"
                ],
                result: "Phom được ghi nhận trả về kho. Tồn kho cập nhật real-time. Ticket log ghi lại lịch sử mượn/trả đầy đủ.",
                nextProcess: "Phom quay lại kho, sẵn sàng cho lần mượn tiếp theo"
            },
            {
                title: "RFID Last Chiller Dashboard",
                subtitle: "Theo dõi real-time phom tại chuyền Assembly",
                description: "Tại Assembly, RFID reader tại công đoạn de-last đọc chip RFID trên phom khi tháo ra. Dữ liệu cập nhật <strong>real-time</strong> lên Last Usage Dashboard.",
                details: [
                    "Truy cập: http://192.168.30.19/Modules/Production/last_chiller/",
                    "Dashboard hiển thị: Total Last Borrowed by Line",
                    "Total Last Usage: Đếm unique last qua reader",
                    "Total Last Through: Đếm tất cả (chấp nhận trùng mỗi 5 phút)",
                    "Line Daily Output: Sản lượng ngày theo chuyền"
                ],
                result: "Real-time dashboard hiển thị tình trạng sử dụng phom giày tại tất cả chuyền Assembly. Giúp quản lý kho tối ưu phân phối phom.",
                nextProcess: "Dữ liệu tích hợp vào KPI Dashboard tổng thể"
            }
        ],
        roles: [
            { role: "System Owner", dept: "Digital Team", responsibility: "Đào tạo, triển khai, giám sát" },
            { role: "System Developer", dept: "LHG-Nghia", responsibility: "Phát triển hệ thống RFID, sửa lỗi" },
            { role: "User", dept: "Last Warehouse & Assembly Line", responsibility: "Quét mượn/trả, binding phom mới" },
            { role: "Admin", dept: "Last Warehouse Manager", responsibility: "Quản lý tồn kho, báo cáo, mất phom" }
        ]
    },

    // =============== STOCKFITTING ===============
    "stockfitting": {
        title: "Stockfitting",
        breadcrumb: "Stockfitting",
        image: "images/assembly_line.png",
        description: "Stockfitting là công đoạn chuẩn bị trước Assembly, bao gồm gắn lót (insole), strobel và các phụ kiện vào Upper. Sản lượng được ghi nhận qua Production Manager và EIP Hourly Output Entry.",
        area: "Stockfitting Area",
        factory: "ALL FTY (EIP Hourly Output: LHG only)",
        systems: ["Production Manager - Endline QC", "EIP Hourly Output Entry", "Stockfitting Dashboard"],
        machines: [
            { icon: "🔨", name: "Trạm Stockfitting", desc: "Trạm làm việc gắn lót và phụ kiện vào Upper" },
            { icon: "📱", name: "Tablet QC Endline", desc: "Thiết bị ghi nhận kết quả QC cuối chuyền" },
            { icon: "💻", name: "EIP Terminal", desc: "Nhập sản lượng theo giờ vào EIP" }
        ],
        workflow: [
            { name: "Xưởng May" },
            { name: "Nhận Upper", current: true },
            { name: "Gắn phụ kiện" },
            { name: "QC Endline" },
            { name: "Nhập Output EIP" },
            { name: "→ Assembly" }
        ],
        steps: [
            {
                title: "Nhận Upper từ Xưởng May",
                subtitle: "Tiếp nhận Upper hoàn chỉnh",
                description: "Upper hoàn chỉnh từ Xưởng May được chuyển đến Stockfitting. Nhân viên kiểm tra và chuẩn bị cho công đoạn gắn phụ kiện.",
                details: [
                    "Nhận Upper đã may xong từ Stitching",
                    "Kiểm tra sơ bộ Upper: Đường may, màu sắc, kích cỡ",
                    "Sắp xếp theo RY và Size để tiện xử lý"
                ],
                result: "Upper sẵn sàng cho công đoạn Stockfitting.",
                nextProcess: "Tiến hành gắn lót và phụ kiện"
            },
            {
                title: "Gắn Phụ Kiện & Kiểm Tra QC",
                subtitle: "Hoàn thiện và kiểm tra chất lượng",
                description: "Gắn insole, strobel và các phụ kiện khác vào Upper. Sau đó QC Endline kiểm tra qua hệ thống <strong>Production Manager</strong>.",
                details: [
                    "Gắn insole (lót trong) vào Upper",
                    "Gắn strobel và các phụ kiện cần thiết",
                    "QC Endline kiểm tra sản phẩm theo tiêu chuẩn",
                    "Kết quả QC được ghi nhận vào Production Manager (Data Integration)",
                    "Nhập sản lượng theo giờ vào EIP Hourly Output Entry (LHG)"
                ],
                result: "Upper đã gắn phụ kiện, qua QC. Sản lượng hiển thị trên Stockfitting Dashboard (LHG). Dữ liệu ERP Output Entry cập nhật.",
                nextProcess: "Upper hoàn chỉnh → Chuyển sang Assembly để ráp với đế giày"
            }
        ],
        roles: [
            { role: "User", dept: "Nhân viên Stockfitting", responsibility: "Thực hiện gắn phụ kiện, nhập output" },
            { role: "QC", dept: "QC Endline", responsibility: "Kiểm tra chất lượng sản phẩm" },
            { role: "Monitor", dept: "Supervisor", responsibility: "Giám sát tiến độ, năng suất" }
        ]
    },

    // =============== ASSEMBLY ===============
    "assembly": {
        title: "Xưởng Ráp (Assembly)",
        breadcrumb: "Xưởng Ráp",
        image: "images/assembly_line.png",
        description: "Assembly là công đoạn cuối cùng trong sản xuất giày, nơi Upper được gắn vào phom (Last), dán đế (Outsole) và hoàn thiện thành đôi giày hoàn chỉnh. Sản lượng được ghi nhận qua Camera Vision System hoặc Production Input App.",
        area: "Assembly Area",
        factory: "ALL FTY",
        systems: ["Camera Vision System", "Production Input App", "RFID Last System", "RFID Last Chiller", "Endline QC", "Andon System", "KPI Dashboard"],
        machines: [
            { icon: "📷", name: "Camera Vision System", desc: "Hệ thống camera quét mã vạch hộp giày tự động ghi nhận sản lượng" },
            { icon: "🔥", name: "Lò Ép (Oven)", desc: "Lò nhiệt để ép keo gắn Upper với đế giày" },
            { icon: "❄️", name: "Chiller", desc: "Máy làm lạnh để cố định keo sau khi ép" },
            { icon: "📡", name: "RFID Reader", desc: "Đầu đọc RFID tại công đoạn de-last (tháo phom)" },
            { icon: "📱", name: "Production Input App", desc: "App backup ghi nhận sản lượng khi Camera hỏng" },
            { icon: "🚨", name: "Andon System", desc: "Hệ thống cảnh báo khi phát hiện vấn đề chất lượng" }
        ],
        workflow: [
            { name: "Stockfitting" },
            { name: "Gắn phom", current: true },
            { name: "Dán đế" },
            { name: "Ép lò" },
            { name: "Tháo phom" },
            { name: "Camera Scan" },
            { name: "→ Kho FG" }
        ],
        steps: [
            {
                title: "Lasting - Gắn Upper lên Phom",
                subtitle: "Gắn Upper đã hoàn chỉnh lên phom giày (Last)",
                description: "Upper từ Stockfitting được gắn lên phom giày. Phom được mượn từ Last Warehouse qua hệ thống <strong>RFID Last</strong>.",
                details: [
                    "Nhận phom từ Last Warehouse (đã quét RFID Borrow)",
                    "Gắn Upper lên phom đúng size, đúng bên (Left/Right)",
                    "Đảm bảo Upper căng đều trên phom, không nhăn",
                    "Chuẩn bị cho công đoạn dán đế"
                ],
                result: "Upper được gắn chặt trên phom giày, sẵn sàng để dán đế Outsole.",
                nextProcess: "Dán keo và đế giày"
            },
            {
                title: "Bottoming - Dán Đế & Ép Lò",
                subtitle: "Dán outsole và ép keo bằng lò nhiệt",
                description: "Bôi keo lên đế Upper và Outsole, sau đó ép lại bằng lò nhiệt (<strong>Oven</strong>). Nhiệt độ lò được giám sát qua Workstation Dashboard.",
                details: [
                    "Bôi keo theo đúng quy trình lên cả Upper và Outsole",
                    "Đặt giày vào lò ép (Oven) - nhiệt độ theo tiêu chuẩn QIP",
                    "Workstation Dashboard giám sát: Upper Oven Temp, Lower Oven Temp, Surface Temp, Conveyor Speed",
                    "Sau lò ép → Đưa qua Chiller (làm lạnh) để cố định keo",
                    "RFID Reader tại công đoạn de-last tự động đọc chip phom khi tháo"
                ],
                result: "Giày hoàn chỉnh sau khi tháo phom. RFID Last Chiller Dashboard cập nhật real-time: Last Usage, Last Through count.",
                nextProcess: "Giày hoàn chỉnh → Kiểm tra QC → Quét Camera Vision"
            },
            {
                title: "Camera Vision - Quét Mã Vạch Hộp Giày",
                subtitle: "Hệ thống camera tự động quét và ghi nhận sản lượng",
                description: "Giày được đóng hộp, dán nhãn mã vạch. Hộp giày đặt lên slider, camera tự động quét mã vạch và ghi nhận sản lượng vào hệ thống.",
                details: [
                    "Mở app Camera Vision → Cho phép quyền camera → Chọn line",
                    "Xác định hướng camera: Quay vào trong chuyền hay ra lối đi",
                    "Đặt hộp giày lên slider với nhãn mã vạch hướng về camera",
                    "Đặt hộp sát thanh guide bar, khoảng cách tối thiểu",
                    "Chờ hệ thống xác nhận scan thành công (hiện trên màn hình)",
                    "Lấy hộp giày ra khỏi slider",
                    "⚠️ Nếu Camera hỏng: Vuốt trái → Chuyển sang Production Input App nhập thủ công"
                ],
                result: "Sản lượng ghi nhận tự động qua camera. Reports: Daily (theo ngày, dữ liệu scanned vs ERP sync), RY (theo đơn hàng), Hourly (theo giờ với target vs actual). Dữ liệu hiển thị trên KPI Dashboard.",
                nextProcess: "Giày đóng hộp → Chuyển đến Kho Thành Phẩm (Finished Goods)"
            }
        ],
        roles: [
            { role: "System Owner", dept: "Production", responsibility: "Sở hữu roadmap Camera Vision, phê duyệt thay đổi, giám sát KPI" },
            { role: "Camera Vision User", dept: "Operator", responsibility: "Thực hiện scan theo SOP, kiểm tra kết quả, báo lỗi" },
            { role: "Process Monitor", dept: "Line Leader / Supervisor", responsibility: "Giám sát tuân thủ, xác minh dữ liệu, điều tra ngoại lệ" },
            { role: "System Administrator", dept: "IT Team", responsibility: "Quản lý cấu hình, kết nối mạng, backup, khắc phục sự cố" },
            { role: "Maintenance Support", dept: "IT, FIT & Digital Team", responsibility: "Bảo trì phần cứng, bảo dưỡng định kỳ" }
        ]
    },

    // =============== FINISHED GOODS ===============
    "finished-goods": {
        title: "Kho Thành Phẩm (Finished Goods Warehouse)",
        breadcrumb: "Kho Thành Phẩm",
        image: "images/finished_goods.png",
        description: "Kho Thành Phẩm là điểm cuối của quy trình sản xuất. Giày hoàn chỉnh được nhập kho, chờ kiểm tra (inspection), lab test, và xuất hàng (shipment). Dashboard FG hiển thị tổng quan tình trạng đơn hàng.",
        area: "Finished Goods Warehouse",
        factory: "ALL FTY",
        systems: ["Production Manager - FG Warehouse Scanning", "FG Escalation (QIP)", "Finished Goods Dashboard"],
        machines: [
            { icon: "📊", name: "FG Scanning System", desc: "Hệ thống quét mã vạch nhập kho thành phẩm" },
            { icon: "📦", name: "Conveyor & Pallet", desc: "Hệ thống băng chuyền và pallet vận chuyển" },
            { icon: "🚛", name: "Forklift", desc: "Xe nâng di chuyển hàng trong kho" }
        ],
        workflow: [
            { name: "Assembly" },
            { name: "Nhập kho FG", current: true },
            { name: "Chờ Inspection" },
            { name: "Lab Test" },
            { name: "Shipment" },
            { name: "→ Khách hàng" }
        ],
        steps: [
            {
                title: "Nhập Kho Thành Phẩm",
                subtitle: "Quét mã vạch nhập giày vào kho FG",
                description: "Giày từ Assembly được vận chuyển đến Kho FG. Sử dụng <strong>Production Manager - FG Warehouse Scanning</strong> để quét mã vạch và ghi nhận nhập kho.",
                details: [
                    "Nhận giày đóng hộp từ Assembly",
                    "Quét mã vạch adidas (ERP/Sales/N1A) trên mỗi thùng/pallet",
                    "Hệ thống ghi nhận vào PO Loading",
                    "Sắp xếp hàng vào vị trí kho theo quy định"
                ],
                result: "Giày được ghi nhận nhập kho FG. Dashboard hiển thị: Total order waiting for inspection, waiting for shipment, not fully imported.",
                nextProcess: "Chờ kiểm tra Inspection / Lab Test"
            },
            {
                title: "Kiểm Tra & Xuất Hàng",
                subtitle: "Inspection, Lab Test và Ship hàng",
                description: "Đơn hàng chờ kiểm tra bởi đội QC/Lab. Sau khi pass, lịch xuất hàng hiển thị trên Dashboard. <strong>FG Escalation</strong> xử lý các trường hợp cần repacking.",
                details: [
                    "FG Dashboard hiển thị: Total Shipped (by PO), Waiting Inspection, Waiting Lab Test, Waiting Shipment",
                    "MDP % tính theo công thức của Business Shipping Team trên ERP",
                    "Shipping Schedule: Hiển thị lịch ship Hôm nay, Ngày mai, Ngày kia (trừ CN)",
                    "Top 5 Repacking Reasons: Thống kê lý do đóng gói lại nhiều nhất (ERP-QIP-SN787)",
                    "FG Escalation: Hệ thống từ QIP ghi nhận các trường hợp cần xử lý"
                ],
                result: "Đơn hàng được xuất đi cho khách hàng. Dashboard FG cung cấp overview toàn diện cho management theo dõi.",
                nextProcess: "Hàng xuất xưởng → Đến khách hàng (adidas)"
            }
        ],
        roles: [
            { role: "User", dept: "FG Warehouse Staff", responsibility: "Quét hàng nhập/xuất kho" },
            { role: "Monitor", dept: "Warehouse Manager", responsibility: "Giám sát tồn kho, lịch ship" },
            { role: "QC", dept: "Inspection Team", responsibility: "Kiểm tra chất lượng trước xuất" }
        ]
    },

    // =============== CAMERA VISION (Detail) ===============
    "camera-vision": {
        title: "Hệ Thống Camera Vision",
        breadcrumb: "Camera Vision",
        image: "images/camera_vision.png",
        description: "Camera Vision System là hệ thống quét mã vạch hộp giày tự động bằng camera, thay thế việc nhập thủ công. Hệ thống tích hợp với EIP và hiển thị trên KPI Dashboard.",
        area: "Assembly Line - All Factories",
        factory: "ALL FTY",
        systems: ["Camera Vision App (Android)", "Production Input App (Backup)", "EIP Integration", "KPI Dashboard"],
        machines: [
            { icon: "📷", name: "Camera Module", desc: "Camera gắn trên slider, tự động scan mã vạch hộp giày" },
            { icon: "🛝", name: "Slider/Conveyor", desc: "Thanh trượt đặt hộp giày cho camera quét" },
            { icon: "📱", name: "Android Tablet", desc: "Thiết bị chạy ứng dụng Camera Vision" },
            { icon: "📊", name: "Guide Bar", desc: "Thanh hướng dẫn căn chỉnh hộp giày" }
        ],
        workflow: [
            { name: "Đóng hộp giày" },
            { name: "Đặt lên slider", current: true },
            { name: "Camera scan" },
            { name: "Xác nhận" },
            { name: "Reports" },
            { name: "→ KPI Dashboard" }
        ],
        steps: [
            {
                title: "Mở Ứng Dụng & Đăng Nhập",
                subtitle: "Khởi động Camera Vision trên tablet Android",
                description: "Nhấn icon <strong>Production Input</strong> → Hệ thống chuyển đến giao diện Camera Vision. Vuốt phải/trái để chuyển đổi giữa Scanning PO và Production Input.",
                details: [
                    "Nhấn icon Production Input trên tablet",
                    "Chọn ngôn ngữ → Chọn nhà máy",
                    "Nhập Username & Password → Nhấn Login",
                    "Chọn Operation: Packaging → Chọn Floor → Chọn Line",
                    "Tick 'Always open Vision PI when camera is connected' → OK",
                    "Navigation: Vuốt trái = Production Input, Vuốt phải = Scanning PO"
                ],
                result: "Giao diện Scanning sẵn sàng. Các tab: Scanning PO, Production Input Homepage, Daily Report, Packing/BOM info, RY Report, Hourly Report, Labor/WH & Reason.",
                nextProcess: "Bắt đầu quét hộp giày"
            },
            {
                title: "Quét Hộp Giày Trên Slider",
                subtitle: "Đặt hộp giày lên slider để camera tự động quét",
                description: "Đây là thao tác chính: đặt hộp giày lên slider với nhãn mã vạch hướng về camera. Camera tự động nhận diện và ghi nhận sản lượng.",
                details: [
                    "Bước 1: Xác định hướng camera - ống kính quay vào chuyền hay ra lối đi",
                    "Bước 2: Đặt hộp giày lên slider với NHÃN MÃ VẠCH HƯỚNG VỀ CAMERA",
                    "Bước 3: Đẩy hộp sát thanh guide bar, khoảng cách tối thiểu",
                    "Bước 4: Chờ hệ thống xác nhận scan thành công trên màn hình",
                    "Bước 5: Lấy hộp giày ra khỏi slider",
                    "⚠️ Nếu scan thất bại: Căn chỉnh lại nhãn mã vạch và thử lại"
                ],
                result: "Hệ thống hiển thị 'Successful scan'. Dữ liệu tự động đồng bộ lên ERP. Chỉ dữ liệu đã verified và matched mới được ghi nhận là valid output.",
                nextProcess: "Dữ liệu tích hợp → EIP → KPI Dashboard"
            },
            {
                title: "Thiết Lập Labor, Working Hour & Reason",
                subtitle: "Cấu hình thông tin nhân lực và giờ làm việc",
                description: "Từ giao diện Scanning, vuốt trái để vào Production Input, nhấn nút <strong>SETUP</strong> để thiết lập nhân lực, giờ làm và lý do.",
                details: [
                    "Vuốt trái từ Scanning → Production Input",
                    "Nhấn nút SETUP ở góc trên phải",
                    "Thiết lập Labor: Số lượng nhân lực thực tế",
                    "Thiết lập Working Hour: Thời gian làm việc",
                    "Thiết lập Reason: Lý do nếu sản lượng không đạt target"
                ],
                result: "Thông tin nhân lực và giờ làm được cập nhật, ảnh hưởng đến tính toán Efficiency trên Dashboard.",
                nextProcess: "Quay lại quét hộp giày tiếp"
            },
            {
                title: "Xem Reports",
                subtitle: "Kiểm tra báo cáo Daily, RY, Hourly",
                description: "Nhấn nút Report trong giao diện Scanning để truy cập 3 loại báo cáo chi tiết.",
                details: [
                    "Daily Report: Click tab Date → Xem tổng sản lượng ngày, dữ liệu Scanned vs ERP Sync, Tổng qty by RY, Tổng qty by Size",
                    "RY Report: Click tab Quantity → Nhập RY → Click Query → Xem tổng qty theo RY và sizes",
                    "Hourly Report: Click tab Hourly → Chọn ngày → Xem Target vs Actual theo giờ, Reason hiển thị nếu không đạt",
                    "Packing/BOM: Click tab Packing → Nhập RY → Query → Xem Pack/BOM data"
                ],
                result: "Báo cáo đầy đủ 3 cấp độ (Daily/RY/Hourly). Có thể xuất PDF và Excel. Hỗ trợ management review và decision-making.",
                nextProcess: "Dữ liệu → Factory KPI (Daily) → Floor KPI → Weekly Trend → Monthly Summary"
            }
        ],
        roles: [
            { role: "System Owner", dept: "Production", responsibility: "Sở hữu roadmap, phê duyệt thay đổi, giám sát KPI" },
            { role: "Camera Vision User", dept: "Operator", responsibility: "Scan hộp giày theo SOP, kiểm tra kết quả, báo lỗi" },
            { role: "Process Monitor", dept: "Line Leader / Supervisor", responsibility: "Giám sát tuân thủ, xác minh dữ liệu" },
            { role: "Process Engineer", dept: "Digital Team", responsibility: "Phân tích hiệu suất, cải tiến quy trình" },
            { role: "System Administrator", dept: "IT Team", responsibility: "Quản lý cấu hình, user access, backup" }
        ]
    },

    // =============== DOWNTIME ===============
    "downtime": {
        title: "Ứng Dụng Downtime (Quản Lý Máy Hỏng)",
        breadcrumb: "Downtime App",
        image: "images/downtime_app.png",
        description: "Ứng dụng Downtime quản lý toàn bộ quy trình báo hỏng → phân công → sửa chữa → hoàn thành cho máy móc sản xuất. Hệ thống thông báo đa kênh (phone, màn hình, đèn cảnh báo) đảm bảo phản ứng nhanh.",
        area: "All Production Areas",
        factory: "ALL FTY",
        systems: ["Downtime Mobile App", "Downtime Dashboard", "Auto-Generated Reports"],
        machines: [
            { icon: "📱", name: "Mobile Phone/Tablet", desc: "Thiết bị di động chạy app Downtime cho Leader và Mechanic" },
            { icon: "📺", name: "Production Screen", desc: "Màn hình sản xuất hiển thị thông báo máy hỏng" },
            { icon: "💡", name: "Alarm Light", desc: "Đèn cảnh báo nháy khi có máy hỏng" },
            { icon: "📊", name: "KPI Monitor", desc: "Màn hình hiển thị Dashboard Downtime" }
        ],
        workflow: [
            { name: "Máy hỏng", current: true },
            { name: "Leader báo cáo" },
            { name: "Thông báo 3 kênh" },
            { name: "Mechanic nhận việc" },
            { name: "Sửa chữa" },
            { name: "Hoàn thành" }
        ],
        steps: [
            {
                title: "Cài Đặt & Đăng Nhập App Downtime",
                subtitle: "Cài app trên điện thoại Android/iOS",
                description: "App Downtime được cài như PWA (Progressive Web App). Truy cập link website và thêm vào màn hình chính.",
                details: [
                    "Android: Mở Chrome → Nhập lyv.lacty.com.vn → 3 dots → 'Add to home screen'",
                    "iOS: Mở Safari → Nhập lyv.lacty.com.vn → Share icon → 'Add to home screen'",
                    "Đăng nhập: Username Production Leader = Floor+Dept (VD: g4m1)",
                    "Username Mechanic = Employee ID",
                    "Password = Factory code + 123 (VD: lhg123)",
                    "Chọn nhà máy tương ứng"
                ],
                result: "App Downtime hiện trên màn hình chính điện thoại. Đăng nhập thành công với quyền tương ứng (Leader/Mechanic/Manager).",
                nextProcess: "Sẵn sàng báo cáo máy hỏng hoặc nhận việc sửa chữa"
            },
            {
                title: "Production Leader Báo Cáo Máy Hỏng",
                subtitle: "Leader gửi yêu cầu sửa chữa khi phát hiện máy hỏng",
                description: "Khi máy hỏng, Production Leader mở app, chọn <strong>'Report of a broken machine'</strong>, quét mã vạch trên máy, chọn lý do hỏng và gửi yêu cầu.",
                details: [
                    "Đăng nhập → Chọn 'Report of a broken machine'",
                    "Chọn loại thợ: Mechanic (cơ khí) hoặc Electromechanical (điện cơ)",
                    "Quét barcode trên máy hỏng bằng camera điện thoại",
                    "Chọn lý do hỏng từ danh sách",
                    "Nhấn Confirm → Yêu cầu sửa chữa được gửi",
                    "Cho Changeover: Chọn 'Enter Information' → Điền thông tin → Confirm"
                ],
                result: "Yêu cầu sửa chữa được gửi. 3 tín hiệu thông báo đồng thời: (1) Pop-up trên phone Mechanic, (2) Pop-up trên màn hình sản xuất, (3) Đèn cảnh báo nháy.",
                nextProcess: "Mechanic nhận thông báo và nhận việc sửa chữa"
            },
            {
                title: "Mechanic Nhận & Thực Hiện Sửa Chữa",
                subtitle: "Thợ sửa chữa nhận việc và xử lý máy hỏng",
                description: "Mechanic nhận thông báo qua phone/màn hình, nhận task sửa chữa, quét mã vạch máy, thực hiện sửa và ghi nhận kết quả.",
                details: [
                    "Nhận thông báo → Mở app → Nhấn 3 gạch góc trên phải",
                    "Chọn 'Resolved Status' để xem danh sách task",
                    "Nhấn vào task → Chọn 'Agree' để nhận việc",
                    "Nhấn icon 'Repairman - Execute repair'",
                    "Quét barcode trên máy → Tiến hành kiểm tra & sửa chữa",
                    "Sửa xong: Nhấn 'Repairman - Finished repair'",
                    "Chọn phương pháp sửa (repair method/issue) → Mô tả → Finish"
                ],
                result: "Task sửa chữa hoàn thành. Hệ thống ghi nhận: Downtime = End time - Request time, Waiting Time = Start repair - Request, Repairing Time = End - Start repair.",
                nextProcess: "Mechanic Leader xác nhận hoặc phân công lại nếu cần"
            },
            {
                title: "Dashboard & Báo Cáo Downtime",
                subtitle: "Phân tích dữ liệu downtime real-time",
                description: "Dữ liệu Downtime được phân tích và hiển thị trên Dashboard với 3 cấp: Factory, Floor, Line. Có auto-generated reports.",
                details: [
                    "Dashboard 3 cấp: Factory → Floor → Line",
                    "Downtime Calculation: Repairing End Time - Request Time",
                    "Waiting Time: Repairing Start Time - Request Time",
                    "Repairing Time: Repairing End Time - Repairing Start Time",
                    "Issue Analytic: Phân tích lý do hỏng từ báo cáo Leader",
                    "Machine Analytic: Phân tích theo asset code máy",
                    "Mechanic Performance: Tổng hợp task theo mechanic ID",
                    "Mechanic Availability: Trạng thái có task/nghỉ phép từ HR",
                    "Auto-Generated: Repairing Performance Report + Task Raw Data"
                ],
                result: "Dashboard real-time hiển thị toàn bộ analytics downtime. Báo cáo tự động xuất hàng ngày/tuần/tháng cho management review.",
                nextProcess: "Dữ liệu tích hợp → KPI Dashboard External/Internal"
            }
        ],
        roles: [
            { role: "Production Leader", dept: "Production", responsibility: "Báo cáo máy hỏng, xác nhận sửa xong" },
            { role: "Mechanic", dept: "Mechanic Team", responsibility: "Nhận task, sửa chữa, ghi nhận kết quả" },
            { role: "Mechanic Leader", dept: "Mechanic Team", responsibility: "Phân công task, chuyển task, quản lý danh sách" },
            { role: "Mechanic Manager", dept: "Mechanic Management", responsibility: "Xem analytics, quản lý vị trí làm việc, đánh giá hiệu suất" },
            { role: "ME Monitor", dept: "ME Team", responsibility: "Giám sát task pending, cập nhật vị trí, kiểm tra thiết bị" }
        ]
    },

    // =============== TIER MEETING ===============
    "tier-meeting": {
        title: "Hệ Thống Tier Meeting (Họp Tầng)",
        breadcrumb: "Tier Meeting",
        image: "images/tier_meeting.png",
        description: "Tier Meeting là hệ thống số hóa các cuộc họp tầng (Tier 1-4), từ cấp chuyền sản xuất đến cấp giám đốc. Hệ thống ghi nhận vấn đề, nguyên nhân gốc, hành động cải tiến và theo dõi tiến độ.",
        area: "All Production Areas",
        factory: "ALL FTY",
        systems: ["Tier Meeting Digital System", "Tier Meeting Dashboard", "KPI Dashboard Integration"],
        machines: [
            { icon: "📱", name: "Mobile Phone/Tablet", desc: "Thiết bị truy cập form Tier Meeting qua QR code" },
            { icon: "📺", name: "KPI Standing Monitor", desc: "Màn hình đứng hiển thị KPI Dashboard và QR code form" },
            { icon: "💻", name: "Desktop/Laptop", desc: "Máy tính truy cập Tier Meeting Dashboard" }
        ],
        workflow: [
            { name: "KPI Deviation", current: true },
            { name: "Tier Meeting" },
            { name: "Submit Form" },
            { name: "Action Plan" },
            { name: "Update Status" },
            { name: "Review KPI" }
        ],
        steps: [
            {
                title: "Phát Hiện Deviation từ KPI Dashboard",
                subtitle: "Nhận diện vấn đề cần họp từ KPI",
                description: "Khi phát hiện <strong>KPI bất thường</strong> (Output thấp, Efficiency thấp, RFT thấp) từ Dashboard, Production Team Leaders tổ chức họp Tier Meeting.",
                details: [
                    "Truy cập KPI Dashboard (192.168.30.19 / 192.168.60.15 / ...)",
                    "Kiểm tra: Output not reached target, Efficiency is low, RFT is low",
                    "Hoặc có issue bên ngoài cần thông báo",
                    "Tier 1: Production Leaders & Operators (Daily 9:00, 14:00 tại chuyền)",
                    "Tier 2: Section Leaders & Floor Leader (Daily tại floor)",
                    "Tier 3: Factory Directors & Floor Leaders (Weekly tại meeting room)",
                    "Tier 4: Factory Directors & Regional Director (Khi có vấn đề critical)"
                ],
                result: "Xác định vấn đề cần họp, chuẩn bị nội dung Tier Meeting.",
                nextProcess: "Tổ chức họp và ghi nhận vào hệ thống"
            },
            {
                title: "Gửi Form Tier Meeting",
                subtitle: "Điền và submit form ghi nhận cuộc họp",
                description: "Quét QR code trên Dashboard hoặc KPI Monitor để mở form. Điền đầy đủ thông tin cuộc họp và submit.",
                details: [
                    "Quét QR code trên Dashboard hoặc nhấn nút truy cập form",
                    "Chọn Tier Level: 1/2/3/4",
                    "Chọn ngày họp, bộ phận (Department)",
                    "Nhập ID người chủ trì (Meeting Holder ID)",
                    "Chọn Meeting Subject: RFT, Efficiency, Output, Delivery, Kaizen, Safety, 6S, Information Impart",
                    "Mô tả vấn đề (Issue Description)",
                    "Mô tả nguyên nhân (Cause Description)",
                    "Chọn Root Cause từ danh sách",
                    "Đề xuất hành động cải tiến (Proposed Action)",
                    "Nhập PIC ID → Chọn ngày hoàn thành dự kiến",
                    "Chọn Status: Done/Ongoing/Pending/Failed → Submit"
                ],
                result: "Biên bản Tier Meeting được ghi nhận vào hệ thống. Dashboard hiển thị: Top 3 Issue, Top 3 Root Cause, bản ghi chi tiết.",
                nextProcess: "Theo dõi và update status trong 3 ngày"
            },
            {
                title: "Update Status & Upload Report",
                subtitle: "Cập nhật tiến độ cải tiến và upload biên bản",
                description: "Trong vòng 3 ngày, các record Ongoing phải được cập nhật. Tier 2/3 cần upload biên bản họp (PDF).",
                details: [
                    "Truy cập Dashboard → Nhấn nút UPDATE → Login",
                    "Tìm record: Nhập ID, chọn ngày, Search",
                    "Click icon edit → Cập nhật Root Cause, Status",
                    "Upload Meeting Report (PDF) cho Tier 2/3",
                    "⚠️ Record Ongoing phải update trong vòng 3 ngày",
                    "Meeting Report: A3 Report, PDCA, hoặc tóm tắt nội dung họp"
                ],
                result: "Status được cập nhật, biên bản được lưu. Dashboard phản ánh tình trạng mới nhất.",
                nextProcess: "Quay lại KPI Dashboard → Theo dõi cải tiến → Cycle tiếp tục"
            }
        ],
        roles: [
            { role: "System Owner", dept: "Digital Team", responsibility: "Đào tạo, triển khai, giám sát" },
            { role: "System Developer", dept: "LHG-Quang", responsibility: "Phát triển, sửa lỗi" },
            { role: "User", dept: "All Production Areas", responsibility: "Submit meeting, update status" },
            { role: "ME Tracking", dept: "ME Team", responsibility: "Giám sát nội dung, tần suất, status update" }
        ]
    },
    // =============== 6S & HSE AUDIT ===============
    "6s-audit": {
        title: "Hệ thống Kiểm tra 6S & HSE (6S Audit System)",
        breadcrumb: "6S & HSE Audit",
        image: "images/6s_audit_app.png",
        description: "Hệ thống phần mềm hỗ trợ đội kiểm tra (Audit Team) thực hiện đi tuần tra, chụp ảnh và tự động tạo báo cáo về các vi phạm 6S (Sàng lọc, Sắp xếp, Sạch sẽ, Săn sóc, Sẵn sàng, An toàn) và HSE tại nhà máy.",
        area: "All Production Areas",
        factory: "LHG, LVL, LYV, LYM",
        systems: ["6S Audit Mobile App", "HSE Audit Mobile App", "Audit Dashboard"],
        machines: [
            { icon: "📱", name: "Tablet / Smartphone", desc: "Thiết bị di động cài app 6S Audit để đi tuần tra" },
            { icon: "🖥️", name: "Web Dashboard", desc: "Hệ thống quản lý báo cáo và theo dõi khắc phục" }
        ],
        workflow: [
            { name: "Đi tuần tra", current: true },
            { name: "Chụp ảnh vi phạm" },
            { name: "Tự động tạo Report" },
            { name: "Gửi cảnh báo" },
            { name: "Khắc phục" },
            { name: "→ Đóng Audit" }
        ],
        steps: [
            {
                title: "Thực Hiện Tuần Tra (Patrol)",
                subtitle: "Đội kiểm tra đi tuần tra khu vực",
                description: "Nhân viên thuộc đội 6S / HSE sử dụng thiết bị di động (Tablet/Smartphone) đi tuần tra các khu vực sản xuất theo lịch trình.",
                details: [
                    "Đăng nhập vào ứng dụng 6S Audit trên thiết bị di động",
                    "Chọn khu vực (Area) và chuyền (Line) đang tiến hành kiểm tra",
                    "Quan sát và đối chiếu với tiêu chuẩn 6S / HSE của nhà máy"
                ],
                result: "Xác định được các điểm không tuân thủ (Non-compliance) tại khu vực.",
                nextProcess: "Chụp ảnh và ghi nhận vi phạm"
            },
            {
                title: "Ghi Nhận Vi Phạm (Issue Capturing)",
                subtitle: "Chụp ảnh và nhập liệu trực tiếp",
                description: "Khi phát hiện vi phạm (ví dụ: rác, vật tư để sai quy định, lối thoát hiểm bị chắn), người kiểm tra chụp ảnh trực tiếp từ ứng dụng.",
                details: [
                    "Sử dụng camera của Tablet để chụp ảnh minh chứng vi phạm",
                    "Đánh dấu (Highlight) khu vực lỗi trực tiếp trên ảnh nếu cần",
                    "Chọn loại vi phạm (Category) và nhập ghi chú chi tiết",
                    "Phân công cho người/bộ phận chịu trách nhiệm khắc phục"
                ],
                result: "Thông tin vi phạm và hình ảnh được tải lên hệ thống trung tâm ngay lập tức.",
                nextProcess: "Hệ thống tự động xử lý và gửi báo cáo"
            },
            {
                title: "Tự Động Tạo Báo Cáo & Cảnh Báo",
                subtitle: "Auto Generate Report",
                description: "Thay vì phải về văn phòng làm file Word/Excel thủ công, hệ thống tự động tổng hợp tất cả vi phạm thành báo cáo.",
                details: [
                    "Hệ thống định dạng hình ảnh và lỗi thành form báo cáo chuẩn",
                    "Tự động gửi email/tin nhắn (Zalo) đến bộ phận liên quan",
                    "Cập nhật Dashboard theo dõi tổng thể tiến độ khắc phục"
                ],
                result: "Báo cáo được gửi đi nhanh chóng, không mất thời gian tổng hợp thủ công.",
                nextProcess: "Bộ phận liên quan tiến hành khắc phục"
            }
        ],
        roles: [
            { role: "System Owner", dept: "Digital Team", responsibility: "Triển khai và hướng dẫn sử dụng" },
            { role: "System Developer", dept: "LYV-Phat", responsibility: "Phát triển ứng dụng, cấp quyền tài khoản" },
            { role: "Auditor", dept: "6S/HSE Team", responsibility: "Thực hiện đi tuần, chụp ảnh, ghi nhận lỗi" },
            { role: "Action Owner", dept: "Production/ME", responsibility: "Nhận báo cáo, khắc phục lỗi và cập nhật trạng thái" }
        ]
    },

    // =============== KPI DASHBOARD ===============
    "kpi-dashboard": {
        title: "KPI Dashboard (External & Internal)",
        breadcrumb: "KPI Dashboard",
        image: "images/kpi_dashboard.png",
        description: "KPI Dashboard là trung tâm hiển thị tất cả chỉ số hiệu suất sản xuất. Có 2 loại: External (cho đối tác/khách hàng) và Internal (cho quản lý nội bộ). Hệ thống tổng hợp dữ liệu từ tất cả các module khác.",
        area: "All Areas - Management",
        factory: "ALL FTY",
        systems: ["Production KPI Dashboard", "Material WH Dashboard", "Auto Cutting Dashboard", "Finished Goods Dashboard", "Kaizen Dashboard", "Tier Meeting Dashboard", "Downtime Dashboard", "Multiskill Dashboard", "Workstation Dashboard"],
        machines: [
            { icon: "📺", name: "KPI Standing Monitor", desc: "Màn hình LED lớn đặt tại mỗi tầng sản xuất" },
            { icon: "💻", name: "PC/Laptop", desc: "Truy cập Dashboard qua Chrome browser" },
            { icon: "📱", name: "Mobile Device", desc: "Xem Dashboard trên điện thoại/tablet" }
        ],
        workflow: [
            { name: "Thu thập data", current: true },
            { name: "Tính toán KPI" },
            { name: "Hiển thị Dashboard" },
            { name: "Review & Action" }
        ],
        steps: [
            {
                title: "Truy Cập Dashboard",
                subtitle: "Mở Chrome và nhập địa chỉ IP nhà máy",
                description: "Mỗi nhà máy có một server riêng chạy Dashboard. Truy cập qua Chrome browser trên bất kỳ thiết bị nào trong mạng nội bộ.",
                details: [
                    "LHG: 192.168.30.19",
                    "LVL: 192.168.60.15",
                    "LYV: 192.168.0.96",
                    "LYM: 192.168.55.229",
                    "9 Dashboard: Production KPI, Material WH, Auto Cutting, Finished Goods, Kaizen, Tier Meeting, Downtime, Multiskill, Workstation"
                ],
                result: "Trang Dashboard chính hiển thị tất cả các module có sẵn.",
                nextProcess: "Chọn Dashboard cần xem"
            },
            {
                title: "Production KPI Dashboard",
                subtitle: "Xem Efficiency, Output, RFT theo 3 cấp",
                description: "Dashboard chính hiển thị KPI sản xuất theo 3 cấp: <strong>Factory → Floor → Line</strong>. Nút xanh = đang chọn, nút xám = chưa chọn.",
                details: [
                    "Factory Level: Avg Efficiency/RFT toàn nhà máy, Total Output by Floor, Andon Cases, Attendance by Floor, Hourly Output color-coded",
                    "Floor Level: Avg Efficiency/RFT tầng, Output by Line, Andon Cases by Line",
                    "Line Level: Stitching/Assembly riêng biệt, Hourly Efficiency/Output/RFT, Shoes Info (hình giày đang sản xuất), PPH by Hourly",
                    "External Efficiency = (External Target/Internal Target) × Internal Actual",
                    "External MP = External Target / ((ExEff × 233) / Labor Count)",
                    "External RFT = Random 85-88% (tạm thời)"
                ],
                result: "Real-time KPI Overview cho toàn nhà máy. Management có thể drill-down từ Factory → Floor → Line để tìm bottleneck.",
                nextProcess: "Dựa trên KPI → Ra quyết định cải tiến hoặc tổ chức Tier Meeting"
            },
            {
                title: "Nhập Dữ Liệu External Dashboard Database",
                subtitle: "ME Team nhập dữ liệu Efficiency, Target, OEE, Kaizen",
                description: "Một số dữ liệu External cần được nhập thủ công bởi ME Team qua module <strong>External Dashboard Database</strong> trên EIP.",
                details: [
                    "Truy cập EIP → Login ME account → Module ME → External Dashboard Database",
                    "Efficiency by Model: Nhập thủ công hoặc Import Excel (theo date + model name)",
                    "External Target Output: Import hourly target cả tháng",
                    "OEE Report: Import OEE data (append, replace nếu trùng date + machine name)",
                    "Kaizen: Upload PDF file theo model name, đặt rank hiển thị",
                    "Dashboard Base line by season: Cấu hình baseline"
                ],
                result: "Dữ liệu External được cập nhật → Dashboard Production KPI, Auto Cutting, Kaizen tự động hiển thị.",
                nextProcess: "Dashboard cập nhật → Hiển thị trên KPI Standing Monitor → Review"
            }
        ],
        roles: [
            { role: "System Owner", dept: "Digital Team", responsibility: "Đào tạo, triển khai, giám sát" },
            { role: "System Developer", dept: "LHG-Quang (External), LHG/LYM-Tram, LVL-Lam, LYV-Phat (Internal)", responsibility: "Phát triển, sửa lỗi Dashboard" },
            { role: "Data Input", dept: "ME Team / FME-Digital PIC", responsibility: "Nhập dữ liệu External, upload data" },
            { role: "User", dept: "Managers & Leaders", responsibility: "Xem Dashboard, ra quyết định" }
        ]
    },

    // =============== RFID SYSTEM ===============
    "rfid-system": {
        title: "Hệ Thống RFID Last (Chi Tiết)",
        breadcrumb: "RFID Last System",
        image: "images/rfid_system.png",
        description: "Hệ thống RFID Last quản lý toàn bộ vòng đời phom giày bằng công nghệ RFID, từ binding → mượn → sử dụng → trả → báo mất. Xem chi tiết đầy đủ tại mục 'Kho Phom Giày'.",
        area: "Last Warehouse & Assembly",
        factory: "LHG",
        systems: ["RFID Last Scan App", "Last EIP System", "RFID Last Chiller Dashboard"],
        machines: [
            { icon: "📡", name: "RFID Handheld Scanner", desc: "Máy quét cầm tay đọc chip RFID" },
            { icon: "🏷️", name: "RFID Tags (EPC)", desc: "Chip RFID gắn trên phom, mã EPC unique" },
            { icon: "📶", name: "RFID Fixed Reader", desc: "Đầu đọc RFID cố định tại de-last (Assembly)" },
            { icon: "💻", name: "EIP Last System", desc: "Web portal quản lý phom: Dashboard, Transfer, Inventory" }
        ],
        workflow: [
            { name: "Binding" },
            { name: "Inventory", current: true },
            { name: "Borrow" },
            { name: "Transfer" },
            { name: "Usage (Assembly)" },
            { name: "Return" }
        ],
        steps: [
            {
                title: "Quản Lý Tồn Kho (Inventory)",
                subtitle: "Theo dõi tồn kho phom giày real-time",
                description: "Homepage của app hiển thị tổng quan tồn kho: Tổng RFID, Tổng tồn kho, Tổng loại phom. Có thể search theo Last Type.",
                details: [
                    "Tổng RFID last trong hệ thống",
                    "Tổng RFID stock last (tồn kho)",
                    "Tổng last types (số loại phom)",
                    "Search bar: Tìm kiếm theo Last Type",
                    "Summary: Last ID, Last Type, Last Material, Total Quantity",
                    "Detail: Last Size, Quantity, Stock Quantity"
                ],
                result: "Tổng quan tồn kho phom giày real-time. Hỗ trợ quyết định phân bổ phom.",
                nextProcess: "Xem chi tiết mượn/trả/transfer tại mục 'Kho Phom Giày'"
            },
            {
                title: "Transfer Phom Giữa Các Bộ Phận",
                subtitle: "Chuyển phom từ chuyền này sang chuyền khác",
                description: "Khi cần chuyển phom giữa các chuyền Assembly, sử dụng chức năng <strong>Transfer</strong> trên EIP Last System.",
                details: [
                    "Login EIP Last System → Chọn Transfer",
                    "Tạo ticket: Nhập Sender ID, chọn Receive Department",
                    "Search Last Type cần transfer",
                    "Nhập Transfer Quantity theo từng size",
                    "Có thể thêm nhiều Last Type trong 1 ticket",
                    "Confirm Create → Hệ thống hiển thị tổng số lượng",
                    "Bên nhận: Login → Transfer → Confirm Transfer để nhận"
                ],
                result: "Phom được chuyển thành công giữa các bộ phận. Transfer History ghi lại đầy đủ lịch sử.",
                nextProcess: "Phom được sử dụng tại chuyền Assembly mới"
            },
            {
                title: "Quản Lý Mượn & Mất Phom (Admin)",
                subtitle: "Admin kho quản lý tổng thể",
                description: "Admin Last Warehouse có thêm các chức năng quản lý: General Last Management, Borrow Ticket Log, Borrow Management, Lost Management.",
                details: [
                    "General Last Management: Xem Last Type, Size, Name, Material, Category, Total/Stock/Lack Qty",
                    "Last Borrow Ticket Log: Lịch sử tất cả phiếu mượn/trả và interchange",
                    "Last Borrow Management: Chọn Last Type → Report borrowed qty by line vs stock",
                    "Last Lost Management: Quản lý phom bị mất"
                ],
                result: "Admin có cái nhìn tổng thể về tình trạng phom giày: Tồn kho, đang mượn, đang chuyển, bị mất.",
                nextProcess: "Dữ liệu tích hợp → KPI Dashboard → Last Usage Dashboard"
            }
        ],
        roles: [
            { role: "Admin", dept: "Last Warehouse", responsibility: "Quản lý tồn kho, mượn/trả, mất phom" },
            { role: "Assembly Line User", dept: "Assembly", responsibility: "Tạo transfer, nhận phom" },
            { role: "System Developer", dept: "LHG-Nghia", responsibility: "Phát triển, sửa lỗi hệ thống RFID" }
        ]
    }
};

// ========== RENDER FUNCTIONS ==========

function renderOverview() {
    return `
        <div class="hero">
            <div class="hero-content">
                <div class="hero-badge">🏭 End-to-End Digital System</div>
                <h2>Hướng Dẫn Quy Trình Nhà Máy Sản Xuất Giày</h2>
                <p>Hệ thống hướng dẫn chi tiết từng bước cho tất cả quy trình sản xuất, từ Kho Nguyên Vật Liệu đến Kho Thành Phẩm. Bao gồm các hệ thống số hóa: Kanban, Camera Vision, RFID, KPI Dashboard và nhiều hơn nữa.</p>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon">🏗️</div>
                <div class="stat-value">9</div>
                <div class="stat-label">Khu Vực / Xưởng</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">⚙️</div>
                <div class="stat-value">19+</div>
                <div class="stat-label">Hệ Thống Digital</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">🏭</div>
                <div class="stat-value">4</div>
                <div class="stat-label">Nhà Máy</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">📊</div>
                <div class="stat-value">9</div>
                <div class="stat-label">Dashboard KPI</div>
            </div>
        </div>

        <div class="section-title">
            <span class="title-icon">🔄</span>
            Luồng Quy Trình Sản Xuất (Production Flow)
        </div>
        <div class="workflow-section">
            <div class="workflow-flow">
                ${['material-warehouse', 'cutting', 'stitching', 'outsole-warehouse', 'last-warehouse', 'stockfitting', 'assembly', 'finished-goods'].map((key, i, arr) => {
                    const names = {
                        'material-warehouse': '📦 Kho NVL',
                        'cutting': '✂️ Cắt',
                        'stitching': '🧵 May',
                        'outsole-warehouse': '👟 Kho Đế',
                        'last-warehouse': '🏷️ Kho Phom',
                        'stockfitting': '🔧 Stockfitting',
                        'assembly': '🏗️ Ráp',
                        'finished-goods': '📤 Kho FG'
                    };
                    let html = `<div class="workflow-node" onclick="navigateTo('${key}')">${names[key]}</div>`;
                    if (i < arr.length - 1) html += '<span class="workflow-arrow">→</span>';
                    return html;
                }).join('')}
            </div>
        </div>

        <div class="section-title">
            <span class="title-icon">🗂️</span>
            Tất Cả Khu Vực & Xưởng
        </div>
        <div class="flow-grid">
            ${[
                { key: 'material-warehouse', num: 1, img: 'images/material_warehouse.png', title: 'Kho Nguyên Vật Liệu', desc: 'Tiếp nhận, QC, đăng ký Kanban và phân phối nguyên vật liệu đến các xưởng sản xuất.' },
                { key: 'cutting', num: 2, img: 'images/cutting_area.png', title: 'Xưởng Cắt (Cutting)', desc: 'Cắt vật liệu thành chi tiết bằng máy tự động/bán tự động. Xử lý Treatment.' },
                { key: 'stitching', num: 3, img: 'images/stitching_line.png', title: 'Xưởng May (Stitching)', desc: 'Ráp các chi tiết thành Upper giày hoàn chỉnh. Ghi nhận sản lượng qua app.' },
                { key: 'outsole-warehouse', num: 4, img: 'images/outsole_warehouse.png', title: 'Kho Đế Giày (Outsole)', desc: 'Tiếp nhận và quản lý đế giày từ nhà cung cấp, tích hợp PO Tracking.' },
                { key: 'last-warehouse', num: 5, img: 'images/rfid_system.png', title: 'Kho Phom (Last WH - RFID)', desc: 'Quản lý phom giày bằng RFID: binding, mượn/trả, theo dõi real-time.' },
                { key: 'stockfitting', num: 6, img: 'images/assembly_line.png', title: 'Stockfitting', desc: 'Gắn lót, strobel và phụ kiện vào Upper trước khi chuyển sang Assembly.' },
                { key: 'assembly', num: 7, img: 'images/assembly_line.png', title: 'Xưởng Ráp (Assembly)', desc: 'Gắn Upper lên phom, dán đế, ép lò, Camera Vision scan hộp giày.' },
                { key: 'finished-goods', num: 8, img: 'images/finished_goods.png', title: 'Kho Thành Phẩm (FG)', desc: 'Nhập kho, kiểm tra, lab test và xuất hàng cho khách hàng.' }
            ].map(item => `
                <div class="flow-card" onclick="navigateTo('${item.key}')">
                    <div class="flow-card-image-wrapper">
                        <img src="${item.img}" alt="${item.title}" class="flow-card-image" loading="lazy">
                    </div>
                    <div class="flow-card-body">
                        <div class="flow-card-number">${item.num}</div>
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                        <div class="flow-card-arrow">
                            Xem chi tiết
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="section-title">
            <span class="title-icon">📋</span>
            Hệ Thống Quản Lý & Hỗ Trợ
        </div>
        <div class="flow-grid">
            ${[
                { key: 'camera-vision', num: '📷', img: 'images/camera_vision.png', title: 'Camera Vision System', desc: 'Hệ thống camera tự động quét mã vạch hộp giày, ghi nhận sản lượng.' },
                { key: 'downtime', num: '⚠️', img: 'images/downtime_app.png', title: 'Downtime Application', desc: 'Quản lý báo hỏng → sửa chữa máy. Thông báo 3 kênh đồng thời.' },
                { key: 'tier-meeting', num: '📋', img: 'images/tier_meeting.png', title: 'Tier Meeting System', desc: 'Số hóa họp tầng Tier 1-4. Ghi nhận vấn đề, root cause, action plan.' },
                { key: '6s-audit', num: '🛡️', img: 'images/6s_audit_app.png', title: '6S & HSE Audit System', desc: 'Ứng dụng tuần tra 6S và An toàn. Chụp ảnh lỗi và tự động báo cáo.' },
                { key: 'kpi-dashboard', num: '📊', img: 'images/kpi_dashboard.png', title: 'KPI Dashboard', desc: '9 dashboard hiển thị KPI real-time: Production, Material, Cutting, FG...' },
                { key: 'rfid-system', num: '📡', img: 'images/rfid_system.png', title: 'RFID Last System', desc: 'Quản lý phom giày bằng RFID: binding, mượn/trả, inventory, transfer.' }
            ].map(item => `
                <div class="flow-card" onclick="navigateTo('${item.key}')">
                    <div class="flow-card-image-wrapper">
                        <img src="${item.img}" alt="${item.title}" class="flow-card-image" loading="lazy">
                    </div>
                    <div class="flow-card-body">
                        <div class="flow-card-number">${item.num}</div>
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                        <div class="flow-card-arrow">
                            Xem chi tiết
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderDetailPage(sectionKey) {
    const data = PROCESSES_DATA[sectionKey];
    if (!data || data.type === 'overview') return renderOverview();

    return `
        <div class="detail-header">
            <button class="back-btn" onclick="navigateTo('overview')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Quay lại
            </button>
        </div>

        <div class="detail-hero">
            <img src="${data.image}" alt="${data.title}" loading="lazy">
            <div class="detail-hero-overlay">
                <h2>${data.title}</h2>
                <p>${data.description}</p>
            </div>
        </div>

        <div class="info-grid">
            <div class="info-card">
                <div class="info-card-title">Khu Vực</div>
                <div class="info-card-value">${data.area}</div>
            </div>
            <div class="info-card">
                <div class="info-card-title">Nhà Máy Áp Dụng</div>
                <div class="info-card-value">${data.factory}</div>
            </div>
            <div class="info-card">
                <div class="info-card-title">Số Hệ Thống</div>
                <div class="info-card-value">${data.systems.length} hệ thống</div>
            </div>
        </div>

        ${data.systems ? `
        <div class="alert-box alert-info">
            <div class="alert-box-icon">💡</div>
            <div>
                <strong>Các hệ thống sử dụng:</strong> ${data.systems.join(' • ')}
            </div>
        </div>
        ` : ''}

        ${data.workflow ? `
        <div class="section-title"><span class="title-icon">🔄</span> Luồng Quy Trình</div>
        <div class="workflow-section">
            <div class="workflow-flow">
                ${data.workflow.map((node, i, arr) => {
                    let html = `<div class="workflow-node ${node.current ? 'current' : ''}">${node.name}</div>`;
                    if (i < arr.length - 1) html += '<span class="workflow-arrow">→</span>';
                    return html;
                }).join('')}
            </div>
        </div>
        ` : ''}

        ${data.machines ? `
        <div class="section-title"><span class="title-icon">⚙️</span> Thiết Bị & Máy Móc Sử Dụng</div>
        <div class="machines-section">
            <div class="machines-grid">
                ${data.machines.map(m => `
                    <div class="machine-card">
                        <div class="machine-icon">${m.icon}</div>
                        <div class="machine-name">${m.name}</div>
                        <div class="machine-desc">${m.desc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}

        ${data.steps ? `
        <div class="section-title"><span class="title-icon">📝</span> Hướng Dẫn Từng Bước Chi Tiết</div>
        <div class="steps-container">
            ${data.steps.map((step, i) => `
                <div class="step-item" data-step="${i}" onclick="toggleStep(this)">
                    <div class="step-header">
                        <div class="step-number">${i + 1}</div>
                        <div class="step-title-area">
                            <div class="step-title">${step.title}</div>
                            <div class="step-subtitle">${step.subtitle}</div>
                        </div>
                        <svg class="step-expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                    <div class="step-content">
                        <div class="step-description">${step.description}</div>
                        ${step.details ? `
                        <ul class="step-details">
                            ${step.details.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                        ` : ''}
                        ${step.result ? `
                        <div class="step-result">
                            <div class="step-result-title">✅ KẾT QUẢ ĐẦU RA</div>
                            <p>${step.result}</p>
                        </div>
                        ` : ''}
                        ${step.nextProcess ? `
                        <div class="next-process">
                            <div class="next-process-icon">➡️</div>
                            <div class="next-process-text"><strong>Công đoạn tiếp theo:</strong> ${step.nextProcess}</div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
        ` : ''}

        ${data.roles ? `
        <div class="section-title"><span class="title-icon">👥</span> Vai Trò & Trách Nhiệm</div>
        <div class="roles-table-wrapper">
            <table class="roles-table">
                <thead>
                    <tr>
                        <th>Vai Trò</th>
                        <th>Bộ Phận</th>
                        <th>Trách Nhiệm</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.roles.map(r => `
                        <tr>
                            <td><span class="tag tag-blue">${r.role}</span></td>
                            <td>${r.dept}</td>
                            <td>${r.responsibility}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        ` : ''}

        <div class="alert-box alert-warning">
            <div class="alert-box-icon">⚠️</div>
            <div>
                <strong>Lưu ý quan trọng:</strong> Dữ liệu đã xác nhận (Confirmed) không thể chỉnh sửa bởi người dùng. Việc điều chỉnh dữ liệu yêu cầu phê duyệt từ System Owner và chỉ Admin/IT mới có quyền thực hiện.
            </div>
        </div>
    `;
}

// ========== NAVIGATION & INTERACTION ==========

let currentSection = 'overview';

function navigateTo(sectionKey) {
    currentSection = sectionKey;
    const container = document.getElementById('content-container');
    
    // Animate out
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        // Update content
        if (sectionKey === 'overview') {
            container.innerHTML = renderOverview();
        } else if (sectionKey === 'qa-interview') {
            container.innerHTML = renderQAPage();
        } else {
            container.innerHTML = renderDetailPage(sectionKey);
        }
        
        // Update breadcrumb
        if (sectionKey === 'qa-interview') {
            document.getElementById('breadcrumb-current').textContent = 'Q&A Phỏng Vấn';
        } else {
            const data = PROCESSES_DATA[sectionKey];
            document.getElementById('breadcrumb-current').textContent = data ? data.breadcrumb : 'Tổng Quan';
        }
        
        // Update active nav
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.section === sectionKey);
        });
        
        // Update step progress
        updateStepProgress(sectionKey);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Animate in
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
        
        // Close mobile sidebar
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebar-overlay').classList.remove('active');
    }, 200);
}

function toggleStep(element) {
    const wasExpanded = element.classList.contains('expanded');
    
    // Close all steps
    document.querySelectorAll('.step-item').forEach(step => {
        step.classList.remove('expanded', 'active');
    });
    
    // Toggle clicked step
    if (!wasExpanded) {
        element.classList.add('expanded', 'active');
        // Update progress
        const stepIndex = parseInt(element.dataset.step);
        const totalSteps = document.querySelectorAll('.step-item').length;
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        if (progressFill && progressText) {
            progressFill.style.width = `${((stepIndex + 1) / totalSteps) * 100}%`;
            progressText.textContent = `Bước ${stepIndex + 1}/${totalSteps}`;
        }
    }
}

function updateStepProgress(sectionKey) {
    const progressEl = document.getElementById('step-progress');
    const data = PROCESSES_DATA[sectionKey];
    if (data && data.steps && data.steps.length > 0) {
        progressEl.classList.remove('hidden');
        document.getElementById('progress-fill').style.width = '0%';
        document.getElementById('progress-text').textContent = `0/${data.steps.length} bước`;
    } else {
        progressEl.classList.add('hidden');
    }
}

// ========== Q&A INTERVIEW DATA ==========
const QA_DATA = [
    {
        category: "overview", catLabel: "Tổng Quan", catClass: "qa-cat-overview",
        question: "Can you explain the E2E Digital System?",
        questionVi: "Bạn có thể giải thích hệ thống E2E Digital không?",
        answerEn: "Our E2E Digital System covers the <strong>entire production process</strong> from Material Warehouse to Finished Goods. It includes over <strong>19 digital systems</strong> across <strong>4 factories</strong> (LHG, LVL, LYV, LYM). The system helps us <strong>digitize, monitor, and improve</strong> production in real-time.",
        answerVi: "Hệ thống E2E Digital của chúng tôi bao phủ <strong>toàn bộ quy trình sản xuất</strong> từ Kho Nguyên Vật Liệu đến Kho Thành Phẩm. Hệ thống bao gồm hơn <strong>19 hệ thống số</strong> tại <strong>4 nhà máy</strong> (LHG, LVL, LYV, LYM). Giúp chúng tôi <strong>số hóa, giám sát và cải thiện</strong> sản xuất theo thời gian thực."
    },
    {
        category: "overview", catLabel: "Tổng Quan", catClass: "qa-cat-overview",
        question: "What are the main areas covered by the system?",
        questionVi: "Những khu vực chính nào được hệ thống bao phủ?",
        answerEn: "We cover <strong>9 main areas</strong>: Material Warehouse, Cutting & Treatment, Stitching, Outsole Warehouse, Last Warehouse, Stockfitting, Assembly, Finished Goods Warehouse, and Lean Management systems including KPI Dashboard, Tier Meeting, Downtime, and Kaizen Cloud.",
        answerVi: "Chúng tôi bao phủ <strong>9 khu vực chính</strong>: Kho Nguyên Vật Liệu, Cắt & Xử lý, May, Kho Đế Giày, Kho Phom, Stockfitting, Ráp, Kho Thành Phẩm, và các hệ thống Quản lý Lean gồm KPI Dashboard, Tier Meeting, Downtime, Kaizen Cloud."
    },
    {
        category: "material", catLabel: "Kho NVL", catClass: "qa-cat-material",
        question: "Walk me through the material receiving process step by step.",
        questionVi: "Hãy trình bày từng bước quy trình nhận nguyên vật liệu.",
        answerEn: "<strong>Step 1:</strong> Material arrives at the warehouse from the supplier.<br><strong>Step 2:</strong> Warehouse staff <strong>scans the barcode</strong> on the package to register it into the <strong>MES Digital Warehouse</strong> system.<br><strong>Step 3:</strong> The system <strong>automatically matches</strong> the received quantity with the Purchase Order.<br><strong>Step 4:</strong> QC team inspects using <strong>ERP-QIP module</strong> — result: Pass, Fail, or Waiting for Lab Test.<br><strong>Step 5:</strong> If Pass → material is registered into <strong>Kanban Online Registration</strong> with Kanban code.<br><strong>Step 6:</strong> Material is now available for production lines to <strong>call via Kanban Material Calling</strong>.",
        answerVi: "<strong>Bước 1:</strong> Nguyên vật liệu đến kho từ nhà cung cấp.<br><strong>Bước 2:</strong> Nhân viên kho <strong>quét mã vạch</strong> trên kiện hàng để đăng ký vào hệ thống <strong>MES Digital Warehouse</strong>.<br><strong>Bước 3:</strong> Hệ thống <strong>tự động đối chiếu</strong> số lượng nhận với PO đặt hàng.<br><strong>Bước 4:</strong> Đội QC kiểm tra qua module <strong>ERP-QIP</strong> — kết quả: Pass, Fail, hoặc Chờ Lab Test.<br><strong>Bước 5:</strong> Nếu Pass → vật liệu được đăng ký vào <strong>Kanban Online Registration</strong>.<br><strong>Bước 6:</strong> Vật liệu sẵn sàng để xưởng sản xuất <strong>gọi qua Kanban Material Calling</strong>."
    },
    {
        category: "material", catLabel: "Kho NVL", catClass: "qa-cat-material",
        question: "How does the Kanban Material Calling system work?",
        questionVi: "Hệ thống Kanban Material Calling hoạt động như thế nào?",
        answerEn: "<strong>Step 1:</strong> Production line accesses the <strong>Kanban Material Calling</strong> system.<br><strong>Step 2:</strong> They select <strong>material type, quantity, and related RY</strong>.<br><strong>Step 3:</strong> Submit request → system <strong>notifies warehouse staff</strong> immediately.<br><strong>Step 4:</strong> Warehouse prepares and delivers within <strong>2 hours</strong>.<br><strong>Step 5:</strong> Dashboard status: <strong>White</strong> = not called, <strong>Yellow</strong> = preparing, <strong>Green</strong> = delivered.",
        answerVi: "<strong>Bước 1:</strong> Xưởng sản xuất truy cập hệ thống <strong>Kanban Material Calling</strong>.<br><strong>Bước 2:</strong> Chọn <strong>loại vật liệu, số lượng và RY</strong> liên quan.<br><strong>Bước 3:</strong> Gửi yêu cầu → hệ thống <strong>thông báo ngay</strong> cho nhân viên kho.<br><strong>Bước 4:</strong> Kho chuẩn bị và giao trong vòng <strong>2 giờ</strong>.<br><strong>Bước 5:</strong> Trạng thái Dashboard: <strong>Trắng</strong> = chưa gọi, <strong>Vàng</strong> = đang chuẩn bị, <strong>Xanh</strong> = đã giao."
    },
    {
        category: "cutting", catLabel: "Xưởng Cắt", catClass: "qa-cat-cutting",
        question: "How do you create a Job Ticket for Auto Cutting?",
        questionVi: "Bạn tạo Job Ticket cho Auto Cutting như thế nào?",
        answerEn: "<strong>Step 1:</strong> Log in to ERP → <strong>Pro Plan → N2 → N22 → N228 → N2281</strong> Auto Cutting Barcode.<br><strong>Step 2:</strong> Top-left table: Click Insert → fill in <strong>Work Date, Cutting Layers, Shift, Machine Code, Article</strong>.<br><strong>Step 3:</strong> Top-right table: Insert → select <strong>component and material</strong> to cut.<br><strong>Step 4:</strong> Bottom-left table: Insert → select <strong>RY</strong> → enter <strong>material usage</strong> → Save.<br><strong>Step 5:</strong> Size chart appears <strong>automatically</strong> — can modify for shared cutting.<br><strong>Step 6:</strong> Click <strong>Print</strong> → Job Ticket printed with <strong>barcode</strong>.<br><strong>Step 7:</strong> <strong>Scan barcode</strong> at cutting machine → machine starts cutting automatically.",
        answerVi: "<strong>Bước 1:</strong> Đăng nhập ERP → <strong>Pro Plan → N2 → N22 → N228 → N2281</strong>.<br><strong>Bước 2:</strong> Bảng trên-trái: Nhấn Insert → điền <strong>Ngày, Số lớp cắt, Ca, Mã máy, Article</strong>.<br><strong>Bước 3:</strong> Bảng trên-phải: Insert → chọn <strong>component và material</strong> cần cắt.<br><strong>Bước 4:</strong> Bảng dưới-trái: Insert → chọn <strong>RY</strong> → nhập <strong>lượng vật liệu</strong> → Save.<br><strong>Bước 5:</strong> Bảng kích cỡ <strong>tự động hiện</strong> — có thể sửa cho shared cutting.<br><strong>Bước 6:</strong> Nhấn <strong>Print</strong> → In Job Ticket có <strong>mã vạch</strong>.<br><strong>Bước 7:</strong> <strong>Quét mã vạch</strong> tại máy cắt → máy tự động cắt."
    },
    {
        category: "stitching", catLabel: "Xưởng May", catClass: "qa-cat-stitching",
        question: "Show me how the Stitching Production Input App works step by step.",
        questionVi: "Trình bày cách sử dụng app nhập sản lượng Stitching từng bước.",
        answerEn: "<strong>Step 1 - Login:</strong> Open Production Input icon → select language → select factory → enter username & password → Login.<br><strong>Step 2 - Setup Line:</strong> Select Operation: <strong>Stitching</strong> → select Floor → select Line. Only needed first time.<br><strong>Step 3 - Add RY:</strong> Search RY → press <strong>'Add to Queue'</strong> → press Queue button to enter input interface.<br><strong>Step 4 - Record Output:</strong> Press <strong>+1</strong> (add 1 pair), <strong>+10</strong> (add 10 pairs), or <strong>-1</strong> (deduct). Green = not done, Blue-green = completed.<br><strong>Step 5 - Hourly Confirm:</strong> Press <strong>CONFIRM</strong> before each hour ends. Must select <strong>reason</strong> if target not achieved.<br><strong>Step 6 - Auto-Confirm:</strong> Toggle switch to auto-confirm at <strong>minute 28</strong> of each hour.",
        answerVi: "<strong>Bước 1 - Đăng nhập:</strong> Mở icon Production Input → chọn ngôn ngữ → chọn nhà máy → nhập username & password → Login.<br><strong>Bước 2 - Thiết lập chuyền:</strong> Chọn Operation: <strong>Stitching</strong> → chọn Floor → chọn Line. Chỉ cần lần đầu.<br><strong>Bước 3 - Thêm RY:</strong> Tìm RY → nhấn <strong>'Add to Queue'</strong> → nhấn nút Queue để vào giao diện nhập.<br><strong>Bước 4 - Ghi sản lượng:</strong> Nhấn <strong>+1</strong> (thêm 1 đôi), <strong>+10</strong> (thêm 10), hoặc <strong>-1</strong> (trừ). Xanh lá = chưa xong, Xanh lam = hoàn thành.<br><strong>Bước 5 - Xác nhận giờ:</strong> Nhấn <strong>CONFIRM</strong> trước khi hết giờ. Phải chọn <strong>lý do</strong> nếu không đạt target.<br><strong>Bước 6 - Tự xác nhận:</strong> Bật switch auto-confirm tại <strong>phút thứ 28</strong> mỗi giờ."
    },
    {
        category: "stitching", catLabel: "Xưởng May", catClass: "qa-cat-stitching",
        question: "What happens if the hourly target is not achieved?",
        questionVi: "Điều gì xảy ra nếu không đạt target theo giờ?",
        answerEn: "The system <strong>requires a reason</strong> — for example, machine breakdown, material shortage, or manpower issue. If there is another reason, users can type a custom description. The confirmed data is <strong>locked and cannot be edited</strong> by users. Only Admin/IT can make corrections <strong>with approval from System Owner</strong>. All revisions are <strong>logged for traceability</strong>.",
        answerVi: "Hệ thống <strong>yêu cầu chọn lý do</strong> — ví dụ: máy hỏng, thiếu vật liệu, hoặc thiếu nhân lực. Nếu có lý do khác, người dùng có thể nhập mô tả. Dữ liệu đã xác nhận bị <strong>khóa và không thể chỉnh sửa</strong> bởi user. Chỉ Admin/IT mới có thể sửa <strong>với sự phê duyệt của System Owner</strong>. Mọi thay đổi đều được <strong>ghi log truy xuất</strong>."
    },
    {
        category: "assembly", catLabel: "Assembly", catClass: "qa-cat-assembly",
        question: "Explain the Camera Vision scanning process step by step.",
        questionVi: "Giải thích quy trình quét Camera Vision từng bước.",
        answerEn: "<strong>Step 1:</strong> Open app → select language → factory → login → select Operation: <strong>Packaging</strong>, Floor, Line.<br><strong>Step 2:</strong> Tap <strong>ALLOW</strong> for camera permission → tick 'Always open Vision PI when camera connected' → OK.<br><strong>Step 3:</strong> Check camera orientation — lens faces <strong>inward or outward</strong>.<br><strong>Step 4:</strong> Place shoe box on <strong>slider</strong> with barcode label <strong>facing the camera</strong>.<br><strong>Step 5:</strong> Push box <strong>close to guide bar</strong> with minimum gap.<br><strong>Step 6:</strong> Wait for <strong>'Successful scan'</strong> on screen → remove box.<br><strong>Step 7:</strong> If camera fails → <strong>swipe left</strong> → switch to Production Input App for manual entry.",
        answerVi: "<strong>Bước 1:</strong> Mở app → chọn ngôn ngữ → nhà máy → đăng nhập → chọn Operation: <strong>Packaging</strong>, Floor, Line.<br><strong>Bước 2:</strong> Nhấn <strong>ALLOW</strong> cho quyền camera → tick 'Always open Vision PI when camera connected' → OK.<br><strong>Bước 3:</strong> Kiểm tra hướng camera — ống kính quay <strong>vào trong hay ra ngoài</strong>.<br><strong>Bước 4:</strong> Đặt hộp giày lên <strong>slider</strong> với nhãn mã vạch <strong>hướng về camera</strong>.<br><strong>Bước 5:</strong> Đẩy hộp <strong>sát thanh guide bar</strong>, khoảng cách tối thiểu.<br><strong>Bước 6:</strong> Chờ <strong>'Successful scan'</strong> hiện trên màn hình → lấy hộp ra.<br><strong>Bước 7:</strong> Nếu camera hỏng → <strong>vuốt trái</strong> → chuyển sang Production Input App nhập tay."
    },
    {
        category: "assembly", catLabel: "Assembly", catClass: "qa-cat-assembly",
        question: "What reports does Camera Vision provide?",
        questionVi: "Camera Vision cung cấp những báo cáo gì?",
        answerEn: "Three types of reports:<br><strong>1. Daily Report:</strong> Shows data scanned vs data synchronized to ERP, total quantity summary, total by RY, total by size.<br><strong>2. RY Report:</strong> Type the RY number → query → shows total RY quantity and sizes quantity summary.<br><strong>3. Hourly Report:</strong> Select date → shows target vs actual by hour, with reasons displayed if target is not reached.<br>All reports can be <strong>exported to PDF and Excel</strong> through the EIP system.",
        answerVi: "Ba loại báo cáo:<br><strong>1. Báo cáo Ngày:</strong> Hiện dữ liệu đã scan vs đã đồng bộ ERP, tổng số lượng, tổng theo RY, tổng theo size.<br><strong>2. Báo cáo RY:</strong> Nhập số RY → query → hiện tổng quantity theo RY và sizes.<br><strong>3. Báo cáo Giờ:</strong> Chọn ngày → hiện target vs actual theo giờ, có lý do nếu không đạt.<br>Tất cả báo cáo có thể <strong>xuất PDF và Excel</strong> qua hệ thống EIP."
    },
    {
        category: "outsole", catLabel: "Kho Đế", catClass: "qa-cat-outsole",
        question: "How do you record incoming outsole materials?",
        questionVi: "Bạn ghi nhận đế giày nhập kho như thế nào?",
        answerEn: "<strong>Step 1:</strong> Access EIP main page → select <strong>Production → OUTSOLE INCOMING MATERIAL</strong>.<br><strong>Step 2:</strong> Select the <strong>date</strong> when outsole arrived.<br><strong>Step 3:</strong> Click <strong>'Add New'</strong> → search for the RY.<br><strong>Step 4:</strong> System shows: <strong>Purchase Qty, Use Stock Qty</strong>. Enter <strong>Arrival Qty</strong> (actual received).<br><strong>Step 5:</strong> System auto-calculates: <strong>Lacking Qty = Purchase - Stock - Arrival</strong>.<br><strong>Step 6:</strong> Data integrates into <strong>PO Tracking</strong> → shows outsole component completion by RY.",
        answerVi: "<strong>Bước 1:</strong> Truy cập EIP → chọn <strong>Production → OUTSOLE INCOMING MATERIAL</strong>.<br><strong>Bước 2:</strong> Chọn <strong>ngày</strong> đế giày đến.<br><strong>Bước 3:</strong> Nhấn <strong>'Add New'</strong> → tìm RY.<br><strong>Bước 4:</strong> Hệ thống hiện: <strong>Purchase Qty, Use Stock Qty</strong>. Nhập <strong>Arrival Qty</strong> (thực nhận).<br><strong>Bước 5:</strong> Hệ thống tự tính: <strong>Lacking Qty = Purchase - Stock - Arrival</strong>.<br><strong>Bước 6:</strong> Dữ liệu tích hợp vào <strong>PO Tracking</strong> → hiện outsole completion theo RY."
    },
    {
        category: "rfid", catLabel: "RFID Last", catClass: "qa-cat-rfid",
        question: "How does the RFID Last system work? Walk me through binding and borrowing.",
        questionVi: "Hệ thống RFID Last hoạt động thế nào? Trình bày binding và mượn phom.",
        answerEn: "<strong>Binding New Last:</strong><br>1. Open Last System app → login → select <strong>Binding → Bind New</strong>.<br>2. Search <strong>Last ID</strong> → select <strong>Size</strong> → select <strong>Side</strong> (Left/Right).<br>3. Press <strong>Scan</strong> or trigger → scan RFID chip on the last.<br>4. System checks <strong>EPC code</strong>: Proper → press <strong>Complete</strong>. Improper → re-scan.<br><br><strong>Scan Borrow:</strong><br>1. Go to <strong>Borrow/Return → Scan Borrow</strong>.<br>2. Select <strong>borrowed department</strong> → enter <strong>leader ID</strong>.<br>3. Press Scan → scan all lasts being borrowed.<br>4. System checks: <strong>valid EPC + proper pair</strong> (Left, Right matched).<br>5. Press Complete → <strong>borrow ticket created automatically</strong> in EIP.",
        answerVi: "<strong>Binding phom mới:</strong><br>1. Mở app Last System → đăng nhập → chọn <strong>Binding → Bind New</strong>.<br>2. Tìm <strong>Last ID</strong> → chọn <strong>Size</strong> → chọn <strong>Side</strong> (Trái/Phải).<br>3. Nhấn <strong>Scan</strong> hoặc trigger → quét chip RFID trên phom.<br>4. Hệ thống kiểm tra <strong>EPC code</strong>: Proper → nhấn <strong>Complete</strong>. Improper → quét lại.<br><br><strong>Quét mượn:</strong><br>1. Vào <strong>Borrow/Return → Scan Borrow</strong>.<br>2. Chọn <strong>bộ phận mượn</strong> → nhập <strong>ID leader</strong>.<br>3. Nhấn Scan → quét tất cả phom cần mượn.<br>4. Hệ thống kiểm tra: <strong>EPC hợp lệ + cặp đôi đúng</strong> (Trái, Phải).<br>5. Nhấn Complete → <strong>phiếu mượn tạo tự động</strong> trên EIP."
    },
    {
        category: "rfid", catLabel: "RFID Last", catClass: "qa-cat-rfid",
        question: "What is the Last Chiller Dashboard?",
        questionVi: "Last Chiller Dashboard là gì?",
        answerEn: "At the <strong>de-lasting process</strong> in Assembly, we have <strong>fixed RFID readers</strong> that automatically detect lasts being removed. This gives us <strong>real-time data</strong>:<br>• <strong>Total Last Borrowed by Line</strong><br>• <strong>Total Last Usage</strong> — unique last count through reader<br>• <strong>Total Last Through</strong> — count all lasts, accepting duplicates every 5 minutes<br>• <strong>Line Daily Output</strong><br>Access at: http://192.168.30.19/Modules/Production/last_chiller/",
        answerVi: "Tại công đoạn <strong>tháo phom</strong> ở Assembly, chúng tôi có <strong>đầu đọc RFID cố định</strong> tự động phát hiện phom khi tháo ra. Dữ liệu <strong>real-time</strong>:<br>• <strong>Tổng phom mượn theo chuyền</strong><br>• <strong>Tổng phom sử dụng</strong> — đếm phom duy nhất qua reader<br>• <strong>Tổng lượt phom đi qua</strong> — đếm tất cả, chấp nhận trùng mỗi 5 phút<br>• <strong>Sản lượng ngày theo chuyền</strong><br>Truy cập: http://192.168.30.19/Modules/Production/last_chiller/"
    },
    {
        category: "downtime", catLabel: "Downtime", catClass: "qa-cat-downtime",
        question: "What happens when a machine breaks down? Walk me through the complete process.",
        questionVi: "Điều gì xảy ra khi máy hỏng? Trình bày toàn bộ quy trình.",
        answerEn: "<strong>Step 1 - Leader Reports:</strong> Opens Downtime app → selects 'Report broken machine' → chooses <strong>mechanic type</strong> (Mechanical/Electromechanical) → <strong>scans machine barcode</strong> → selects <strong>breakdown reason</strong> → Confirm.<br><strong>Step 2 - 3 Alerts Simultaneously:</strong> ① Phone pop-up on mechanic, ② Production screen notification, ③ <strong>Alarm light flashes</strong>.<br><strong>Step 3 - Mechanic Accepts:</strong> Opens app → menu → Resolved Status → taps task → 'Agree'.<br><strong>Step 4 - Execute Repair:</strong> 'Repairman - Execute Repair' → <strong>scans machine barcode</strong> → repairs the machine.<br><strong>Step 5 - Finish:</strong> 'Repairman - Finished Repair' → selects <strong>repair method/issue</strong> → writes description → Finish.<br><strong>Step 6 - Leader Confirms:</strong> Task Status → 'Agree' to close.",
        answerVi: "<strong>Bước 1 - Leader báo cáo:</strong> Mở app Downtime → chọn 'Report broken machine' → chọn <strong>loại thợ</strong> (Cơ khí/Điện cơ) → <strong>quét mã vạch máy</strong> → chọn <strong>lý do hỏng</strong> → Confirm.<br><strong>Bước 2 - 3 Tín hiệu đồng thời:</strong> ① Pop-up phone mechanic, ② Thông báo màn hình sản xuất, ③ <strong>Đèn cảnh báo nháy</strong>.<br><strong>Bước 3 - Mechanic nhận:</strong> Mở app → menu → Resolved Status → chọn task → 'Agree'.<br><strong>Bước 4 - Sửa chữa:</strong> 'Repairman - Execute Repair' → <strong>quét mã vạch máy</strong> → tiến hành sửa.<br><strong>Bước 5 - Hoàn thành:</strong> 'Repairman - Finished Repair' → chọn <strong>phương pháp sửa</strong> → mô tả → Finish.<br><strong>Bước 6 - Leader xác nhận:</strong> Task Status → 'Agree' để đóng task."
    },
    {
        category: "downtime", catLabel: "Downtime", catClass: "qa-cat-downtime",
        question: "How do you measure downtime performance?",
        questionVi: "Bạn đo lường hiệu suất downtime như thế nào?",
        answerEn: "The system automatically calculates:<br>• <strong>Total Downtime</strong> = Repairing End Time − Request Time<br>• <strong>Waiting Time</strong> = Repairing Start Time − Request Time<br>• <strong>Repairing Time</strong> = Repairing End Time − Repairing Start Time<br><br>Analytics include: <strong>Issue type analysis</strong> (from leader's report), <strong>Machine analysis</strong> (by asset code), <strong>Mechanic performance</strong> (tasks by mechanic ID), <strong>Mechanic availability</strong> (from HR system). Reports are <strong>auto-generated</strong> at Factory, Floor, and Line levels.",
        answerVi: "Hệ thống tự động tính:<br>• <strong>Tổng Downtime</strong> = Giờ kết thúc − Giờ yêu cầu<br>• <strong>Thời gian chờ</strong> = Giờ bắt đầu sửa − Giờ yêu cầu<br>• <strong>Thời gian sửa</strong> = Giờ kết thúc − Giờ bắt đầu sửa<br><br>Phân tích: <strong>Loại vấn đề</strong> (từ báo cáo leader), <strong>Phân tích máy</strong> (theo mã tài sản), <strong>Hiệu suất thợ</strong> (task theo ID), <strong>Sẵn sàng thợ</strong> (từ HR). Báo cáo <strong>tự động tạo</strong> theo Factory, Floor, Line."
    },
    {
        category: "tier", catLabel: "Tier Meeting", catClass: "qa-cat-tier",
        question: "How does the digital Tier Meeting system work?",
        questionVi: "Hệ thống Tier Meeting số hoạt động thế nào?",
        answerEn: "<strong>Step 1 - Detect Issue:</strong> Check KPI Dashboard → identify <strong>low output, low efficiency, or low RFT</strong>.<br><strong>Step 2 - Access Form:</strong> Scan <strong>QR code</strong> on KPI monitor or Dashboard.<br><strong>Step 3 - Fill Form:</strong> Select <strong>Tier level</strong> (1/2/3/4) → date → department → holder ID → subject (RFT/Efficiency/Output/Safety/6S) → describe issue → describe cause → select <strong>root cause</strong> → proposed action → PIC ID → completion date → status → <strong>Submit</strong>.<br><strong>Step 4 - Verify:</strong> Search by ID and date in Dashboard.<br><strong>Step 5 - Update:</strong> Within <strong>3 days</strong>, update root cause, status, and upload meeting report PDF (for Tier 2&3).<br><strong>Step 6 - Review:</strong> Check KPI Dashboard for improvement → <strong>continuous improvement cycle</strong>.",
        answerVi: "<strong>Bước 1 - Phát hiện vấn đề:</strong> Kiểm tra KPI Dashboard → nhận diện <strong>output thấp, efficiency thấp, RFT thấp</strong>.<br><strong>Bước 2 - Truy cập form:</strong> Quét <strong>QR code</strong> trên KPI monitor hoặc Dashboard.<br><strong>Bước 3 - Điền form:</strong> Chọn <strong>Tier</strong> (1/2/3/4) → ngày → bộ phận → ID chủ trì → chủ đề → mô tả vấn đề → nguyên nhân → chọn <strong>root cause</strong> → hành động → PIC → ngày hoàn thành → status → <strong>Submit</strong>.<br><strong>Bước 4 - Xác nhận:</strong> Tìm theo ID và ngày trên Dashboard.<br><strong>Bước 5 - Cập nhật:</strong> Trong <strong>3 ngày</strong>, update root cause, status, upload PDF (Tier 2&3).<br><strong>Bước 6 - Review:</strong> Kiểm tra KPI cải thiện → <strong>vòng cải tiến liên tục</strong>."
    },
    {
        category: "kpi", catLabel: "KPI Dashboard", catClass: "qa-cat-kpi",
        question: "How do you navigate the Production KPI Dashboard?",
        questionVi: "Bạn điều hướng Production KPI Dashboard như thế nào?",
        answerEn: "<strong>Step 1:</strong> Open Chrome → type factory IP: <strong>LHG: 192.168.30.19</strong>, LVL: 192.168.60.15, LYV: 192.168.0.96, LYM: 192.168.55.229.<br><strong>Step 2 - Factory Level:</strong> See <strong>average efficiency & RFT</strong>, total output by floor, andon cases, attendance, hourly output with color codes.<br><strong>Step 3 - Floor Level:</strong> Click a <strong>floor button</strong> (turns green) → same KPIs broken down by production lines.<br><strong>Step 4 - Line Level:</strong> Click a <strong>line button</strong> → Stitching and Assembly data separately: hourly efficiency, output, RFT, PPH, shoe model image.",
        answerVi: "<strong>Bước 1:</strong> Mở Chrome → nhập IP nhà máy: <strong>LHG: 192.168.30.19</strong>, LVL: 192.168.60.15, LYV: 192.168.0.96, LYM: 192.168.55.229.<br><strong>Bước 2 - Cấp Nhà máy:</strong> Xem <strong>efficiency & RFT trung bình</strong>, tổng output theo tầng, andon cases, attendance, output giờ có màu.<br><strong>Bước 3 - Cấp Tầng:</strong> Nhấn nút <strong>tầng</strong> (chuyển xanh) → KPI phân tích theo từng chuyền.<br><strong>Bước 4 - Cấp Chuyền:</strong> Nhấn nút <strong>chuyền</strong> → dữ liệu Stitching và Assembly riêng: efficiency, output, RFT, PPH, hình giày."
    },
    {
        category: "kpi", catLabel: "KPI Dashboard", catClass: "qa-cat-kpi",
        question: "What is the difference between Internal and External KPI?",
        questionVi: "Sự khác biệt giữa KPI Internal và External là gì?",
        answerEn: "<strong>Internal KPI</strong> uses our <strong>actual production data</strong> — real output, real efficiency, real labor count.<br><strong>External KPI</strong> uses data provided by the <strong>customer</strong> — external efficiency by model and external target output. ME team inputs this through the <strong>External Dashboard Database</strong> in EIP.<br><br><strong>Key formula:</strong> External Actual Output = (External Target / Internal Target) × Internal Actual Output.<br>External MP = External Target / ((ExEff × 233) / Labor Count).",
        answerVi: "<strong>KPI Nội bộ</strong> sử dụng <strong>dữ liệu sản xuất thực tế</strong> — output thực, efficiency thực, nhân lực thực.<br><strong>KPI Bên ngoài</strong> sử dụng dữ liệu từ <strong>khách hàng</strong> — efficiency theo model và target output. ME team nhập qua <strong>External Dashboard Database</strong> trên EIP.<br><br><strong>Công thức:</strong> External Actual Output = (External Target / Internal Target) × Internal Actual Output.<br>External MP = External Target / ((ExEff × 233) / Labor Count)."
    },
    {
        category: "data", catLabel: "Data Control", catClass: "qa-cat-data",
        question: "How do you ensure data accuracy and security?",
        questionVi: "Bạn đảm bảo tính chính xác và bảo mật dữ liệu thế nào?",
        answerEn: "We follow <strong>4 strict principles</strong>:<br><strong>1. Data Accuracy:</strong> All data must be captured in <strong>real-time</strong>. Hourly confirmation is <strong>mandatory</strong>. Only verified data is recorded as valid.<br><strong>2. Cut-off Time:</strong> Data must be entered within defined hourly slots. System <strong>automatically locks</strong> after cut-off.<br><strong>3. Revision Control:</strong> Confirmed data <strong>cannot be edited by users</strong>. Only authorized Admin/IT can correct with approval. All revisions are <strong>logged with user and timestamp</strong>.<br><strong>4. Data Confidentiality:</strong> <strong>Role-based access control</strong>. User accounts must not be shared. External sharing requires management approval.",
        answerVi: "Chúng tôi tuân thủ <strong>4 nguyên tắc nghiêm ngặt</strong>:<br><strong>1. Chính xác:</strong> Dữ liệu phải ghi nhận <strong>real-time</strong>. Xác nhận theo giờ là <strong>bắt buộc</strong>. Chỉ dữ liệu verified mới hợp lệ.<br><strong>2. Giờ cắt:</strong> Dữ liệu phải nhập trong khung giờ quy định. Hệ thống <strong>tự khóa</strong> sau cut-off.<br><strong>3. Kiểm soát sửa đổi:</strong> Dữ liệu confirmed <strong>không thể sửa bởi user</strong>. Chỉ Admin/IT có quyền sửa với phê duyệt. Mọi thay đổi được <strong>ghi log user và thời gian</strong>.<br><strong>4. Bảo mật:</strong> <strong>Phân quyền theo vai trò</strong>. Tài khoản không được chia sẻ. Chia sẻ bên ngoài cần phê duyệt quản lý."
    },
    {
        category: "data", catLabel: "Backup", catClass: "qa-cat-data",
        question: "What is the contingency plan if a system goes down?",
        questionVi: "Kế hoạch dự phòng khi hệ thống bị sự cố là gì?",
        answerEn: "We have <strong>backup solutions</strong> for critical systems:<br>• <strong>Camera Vision down:</strong> Users switch to the <strong>Production Input Application</strong> to manually record output — swipe left to access.<br>• <strong>Scanner/device failure:</strong> Same backup process. This is a <strong>temporary solution only</strong> and must be used strictly during system downtime.<br>• For all systems: IT escalation process is in place with defined <strong>response timelines</strong> and <strong>action owners</strong>.",
        answerVi: "Chúng tôi có <strong>giải pháp dự phòng</strong> cho hệ thống quan trọng:<br>• <strong>Camera Vision hỏng:</strong> Chuyển sang <strong>Production Input App</strong> nhập sản lượng thủ công — vuốt trái để truy cập.<br>• <strong>Scanner/thiết bị hỏng:</strong> Cùng quy trình backup. Đây là <strong>giải pháp tạm thời</strong> chỉ dùng khi hệ thống downtime.<br>• Tất cả hệ thống: Có quy trình escalation IT với <strong>thời gian phản hồi</strong> và <strong>người chịu trách nhiệm</strong> rõ ràng."
    },
    {
        category: "overview", catLabel: "Roles", catClass: "qa-cat-overview",
        question: "Who is responsible for each system?",
        questionVi: "Ai chịu trách nhiệm cho mỗi hệ thống?",
        answerEn: "Each system has <strong>4 key roles</strong>:<br>• <strong>System Owner (Digital Team):</strong> Training, implementing, feedback receiving, collaborating with IT for updates, use monitoring.<br>• <strong>System Developer (IT Team):</strong> Developing the system, fixing issues when users encounter problems.<br>• <strong>User (Production Staff):</strong> Using system following SOP, giving feedback/suggestions, reporting issues.<br>• <strong>Monitor (FME-Digital PIC):</strong> Training, use monitoring, escalating user issues/suggestions to IT or Digital team.",
        answerVi: "Mỗi hệ thống có <strong>4 vai trò chính</strong>:<br>• <strong>System Owner (Digital Team):</strong> Đào tạo, triển khai, tiếp nhận phản hồi, phối hợp IT cập nhật, giám sát sử dụng.<br>• <strong>System Developer (IT Team):</strong> Phát triển hệ thống, sửa lỗi khi user gặp vấn đề.<br>• <strong>User (Nhân viên SX):</strong> Sử dụng theo SOP, đóng góp ý kiến, báo cáo vấn đề.<br>• <strong>Monitor (FME-Digital PIC):</strong> Đào tạo, giám sát, escalate vấn đề đến IT hoặc Digital team."
    },
    {
        category: "overview", catLabel: "Improvement", catClass: "qa-cat-overview",
        question: "How do you drive continuous improvement?",
        questionVi: "Bạn thúc đẩy cải tiến liên tục như thế nào?",
        answerEn: "We use a <strong>complete continuous improvement cycle</strong>:<br>1. <strong>KPI Dashboard</strong> — Real-time monitoring to detect deviations.<br>2. <strong>Tier Meeting</strong> — Structured problem-solving at 4 levels with root cause analysis.<br>3. <strong>Kaizen Cloud</strong> — Platform for all improvement ideas across all factories.<br>4. <strong>Downtime App</strong> — Quick response to machine issues with performance analytics.<br>5. <strong>Digital Audit (6S/HSE/QIP)</strong> — Regular audits for workplace standards.<br>All data is <strong>integrated and traceable</strong>, supporting <strong>data-driven decision making</strong>.",
        answerVi: "Chúng tôi sử dụng <strong>vòng cải tiến liên tục hoàn chỉnh</strong>:<br>1. <strong>KPI Dashboard</strong> — Giám sát real-time để phát hiện bất thường.<br>2. <strong>Tier Meeting</strong> — Giải quyết vấn đề có cấu trúc 4 cấp với phân tích root cause.<br>3. <strong>Kaizen Cloud</strong> — Nền tảng ý tưởng cải tiến cho tất cả nhà máy.<br>4. <strong>Downtime App</strong> — Phản ứng nhanh máy hỏng với analytics hiệu suất.<br>5. <strong>Digital Audit (6S/HSE/QIP)</strong> — Kiểm tra định kỳ tiêu chuẩn nơi làm việc.<br>Tất cả dữ liệu <strong>tích hợp và truy xuất được</strong>, hỗ trợ <strong>ra quyết định dựa trên dữ liệu</strong>."
    }
];

const QA_TIPS = [
    { situation: "Không nhớ chi tiết", situationEn: "Can't remember details", en: "\"The system handles that automatically. Let me show you on the screen.\"", vi: "\"Hệ thống xử lý tự động. Để tôi cho anh/chị xem trên màn hình.\"" },
    { situation: "Sếp hỏi về số liệu", situationEn: "Boss asks about data", en: "\"We can check that in real-time on the KPI Dashboard. Let me pull it up.\"", vi: "\"Chúng ta có thể kiểm tra real-time trên KPI Dashboard. Để tôi mở ra.\"" },
    { situation: "Hỏi về bảo mật dữ liệu", situationEn: "Asked about data security", en: "\"Confirmed data is locked and cannot be edited. All revisions require Admin approval and are fully logged.\"", vi: "\"Dữ liệu đã xác nhận bị khóa không thể sửa. Mọi thay đổi cần Admin phê duyệt và được ghi log đầy đủ.\"" },
    { situation: "Hỏi kế hoạch backup", situationEn: "Asked about backup plan", en: "\"If the main system is down, we have a backup solution — for example, the Production Input App for Camera Vision.\"", vi: "\"Nếu hệ thống chính hỏng, chúng tôi có giải pháp backup — ví dụ Production Input App cho Camera Vision.\"" },
    { situation: "Hỏi về cải tiến liên tục", situationEn: "Asked about improvement", en: "\"We use Tier Meeting and Kaizen Cloud to track issues, root causes, and actions with clear timelines.\"", vi: "\"Chúng tôi dùng Tier Meeting và Kaizen Cloud để theo dõi vấn đề, nguyên nhân và hành động.\"" },
    { situation: "Kết thúc câu trả lời", situationEn: "Ending your answer", en: "\"Would you like me to show you the live system / dashboard?\"", vi: "\"Anh/chị có muốn tôi mở hệ thống/dashboard thực tế để xem không?\"" }
];

const QA_CATEGORIES = [
    { key: "all", label: "Tất Cả" },
    { key: "overview", label: "Tổng Quan" },
    { key: "material", label: "Kho NVL" },
    { key: "cutting", label: "Xưởng Cắt" },
    { key: "stitching", label: "Xưởng May" },
    { key: "assembly", label: "Assembly" },
    { key: "outsole", label: "Kho Đế" },
    { key: "rfid", label: "RFID Last" },
    { key: "downtime", label: "Downtime" },
    { key: "tier", label: "Tier Meeting" },
    { key: "kpi", label: "KPI Dashboard" },
    { key: "data", label: "Data Control" }
];

// ========== Q&A RENDER FUNCTION ==========
let currentQAFilter = 'all';

function renderQAPage() {
    return `
        <div class="qa-hero">
            <div class="qa-hero-content">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:15px;">
                    <div class="hero-badge" style="background:rgba(168,85,247,0.1);border-color:rgba(168,85,247,0.2);color:#c084fc;margin-bottom:0;">🎤 Interview Prep</div>
                    <button id="lang-toggle" class="lang-toggle-btn ${currentLang === 'en' ? 'active-en' : ''}" onclick="toggleLanguage()" aria-label="Toggle language">
                        <span class="lang-flag" id="lang-flag">${currentLang === 'en' ? '🇬🇧' : currentLang === 'vi' ? '🇻🇳' : '🌐'}</span>
                        <span class="lang-label" id="lang-label">${currentLang === 'en' ? 'EN' : currentLang === 'vi' ? 'VN' : 'ALL'}</span>
                    </button>
                </div>
                <h2>Q&A Chuẩn Bị Phỏng Vấn Với Sếp</h2>
                <p>Tổng hợp các câu hỏi sếp thường hỏi về quy trình vận hành nhà máy và cách trả lời bằng tiếng Anh kèm dịch tiếng Việt. Nhấn vào từng câu hỏi để xem câu trả lời chi tiết. Dùng nút ngôn ngữ ở trên để chuyển đổi.</p>
            </div>
        </div>

        <div class="qa-filter-tabs" id="qa-filter-tabs">
            ${QA_CATEGORIES.map(cat => `
                <button class="qa-filter-tab ${cat.key === currentQAFilter ? 'active' : ''}" onclick="filterQA('${cat.key}')">${cat.label}</button>
            `).join('')}
        </div>

        <div class="qa-list" id="qa-list">
            ${QA_DATA.filter(q => currentQAFilter === 'all' || q.category === currentQAFilter).map((q, i) => `
                <div class="qa-card" data-category="${q.category}" onclick="toggleQACard(this)">
                    <div class="qa-question-header">
                        <span class="qa-category-badge ${q.catClass}">${q.catLabel}</span>
                        <div class="qa-question-text">
                            <h3>${q.question}</h3>
                            <div class="qa-question-vi">${q.questionVi}</div>
                        </div>
                        <svg class="qa-expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                    <div class="qa-answer-body">
                        <div class="qa-answer-block qa-answer-en">
                            <div class="qa-answer-label">🇬🇧 English Answer</div>
                            <p>${q.answerEn}</p>
                        </div>
                        <div class="qa-answer-block qa-answer-vi">
                            <div class="qa-answer-label">🇻🇳 Dịch Tiếng Việt</div>
                            <p>${q.answerVi}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="qa-tips">
            <h3>💡 Mẹo Trả Lời Khi Bị Hỏi Bất Ngờ</h3>
            <div class="qa-tips-grid">
                ${QA_TIPS.map(tip => `
                    <div class="qa-tip-item">
                        <div class="qa-tip-situation">${tip.situation}</div>
                        <div class="qa-tip-en">"${tip.en.replace(/"/g, '')}"</div>
                        <div class="qa-tip-vi">${tip.vi}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function toggleQACard(card) {
    const wasExpanded = card.classList.contains('expanded');
    // Don't close all - just toggle this one
    card.classList.toggle('expanded');
}

function filterQA(category) {
    currentQAFilter = category;
    // Re-render Q&A section
    const container = document.getElementById('content-container');
    container.innerHTML = renderQAPage();
    // Update filter tab active states
}

// ========== LANGUAGE TOGGLE ==========
let currentLang = 'both'; // 'both', 'en', 'vi'

function toggleLanguage() {
    const btn = document.getElementById('lang-toggle');
    const flag = document.getElementById('lang-flag');
    const label = document.getElementById('lang-label');
    
    if (currentLang === 'both') {
        currentLang = 'en';
        flag.textContent = '🇬🇧';
        label.textContent = 'EN';
        btn.classList.add('active-en');
        document.body.classList.add('lang-en');
        document.body.classList.remove('lang-vi-only');
    } else if (currentLang === 'en') {
        currentLang = 'vi';
        flag.textContent = '🇻🇳';
        label.textContent = 'VN';
        btn.classList.remove('active-en');
        document.body.classList.remove('lang-en');
        document.body.classList.add('lang-vi-only');
    } else {
        currentLang = 'both';
        flag.textContent = '🌐';
        label.textContent = 'ALL';
        btn.classList.remove('active-en');
        document.body.classList.remove('lang-en');
        document.body.classList.remove('lang-vi-only');
    }
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 800);

    // Render initial content
    navigateTo('overview');

    // Sidebar navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            if (section) navigateTo(section);
        });
    });

    // Mobile menu
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.getElementById('sidebar').classList.add('open');
        document.getElementById('sidebar-overlay').classList.add('active');
    });
    document.getElementById('sidebar-overlay').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebar-overlay').classList.remove('active');
    });

    // Search
    document.getElementById('search-input').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.nav-item').forEach(item => {
            const text = item.textContent.toLowerCase();
            if (query === '') {
                item.classList.remove('hidden');
            } else {
                item.classList.toggle('hidden', !text.includes(query));
            }
        });
    });

    // Back to top
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 300);
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Content container transition
    const container = document.getElementById('content-container');
    container.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
});

// ========== GLOBAL LANGUAGE TOGGLE (GOOGLE TRANSLATE) ==========
let isGlobalEng = false;

function toggleGlobalLanguage() {
    isGlobalEng = !isGlobalEng;
    const btn = document.getElementById('global-lang-toggle');
    const flag = document.getElementById('global-lang-flag');
    const label = document.getElementById('global-lang-label');
    
    if (isGlobalEng) {
        flag.textContent = '🇬🇧';
        label.textContent = 'EN';
        btn.classList.add('active-en');
        changeGoogleTranslate('en');
    } else {
        flag.textContent = '🇻🇳';
        label.textContent = 'VN';
        btn.classList.remove('active-en');
        changeGoogleTranslate('vi');
    }
}

function changeGoogleTranslate(lang) {
    const select = document.querySelector('select.goog-te-combo');
    if (select) {
        select.value = lang;
        // Dispatch event with bubbling so Google's listener catches it
        select.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    } else {
        // If widget hasn't loaded yet, retry in a moment (prevents needing to spam clicks)
        setTimeout(() => changeGoogleTranslate(lang), 300);
    }
}
