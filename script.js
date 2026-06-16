/**
 * VinaExplore - Premium Travel & Exploration Javascript Engine
 */

// 1. REALISTIC DATASET FOR 10 FAMOUS VIETNAMESE DESTINATIONS
const destinationsData = [
    {
        id: "halong",
        name: "Vịnh Hạ Long",
        region: "North",
        regionName: "Miền Bắc",
        image: "./images/halong.jpg",
        address: "Thành phố Hạ Long, Quảng Ninh",
        cost: "2,500,000đ - 5,500,000đ",
        food: "Chả mực giã tay, Sá sùng, Bánh gật gù",
        shortDesc: "Kỳ quan thiên nhiên thế giới với hàng ngàn đảo đá vôi kỳ vĩ mọc lên từ làn nước biển xanh ngọc lục bảo.",
        description: "Vịnh Hạ Long là di sản thiên nhiên thế giới được UNESCO công nhận hai lần vào các năm 1994 và 2000 nhờ những giá trị thẩm mỹ và địa chất đặc sắc. Với diện tích khoảng 1.553 km² bao gồm gần 2.000 hòn đảo lớn nhỏ, Vịnh Hạ Long sở hữu vẻ đẹp ngoạn mục với hệ thống đảo đá vôi dựng đứng xen kẽ các hang động tự nhiên lộng lẫy như động Thiên Cung, hang Sửng Sốt, hang Luồn. Du khách đến đây có thể tận hưởng các hoạt động nghỉ dưỡng cao cấp trên du thuyền, chèo thuyền kayak len lỏi qua các vòm hang, hay thưởng ngoạn cảnh hoàng hôn thơ mộng trên biển khơi cực kỳ sang trọng.",
        gallery: [
            "https://special.vietnamplus.vn/wp-content/uploads/2021/03/1-1607009060-29.jpg",
            "https://dms.gov.vn/documents/d/guest/huong-cha-muc-gia-tay-02-jpg",
            "https://dongytanphat.net/wp-content/uploads/2023/03/550x550-crsa-sung-kho-7.jpg",
            "https://cms.mobihome.vn/Data/Sites/1/media/banh-gat-gu-quang-ninh-1.jpg"
        ],
    },
    {
        id: "sapa",
        name: "Sa Pa",
        region: "North",
        regionName: "Miền Bắc",
        image: "./images/sapa.jpg",
        address: "Thị xã Sa Pa, tỉnh Lào Cai",
        cost: "1,800,000đ - 4,000,000đ",
        food: "Thắng cố, Thịt trâu gác bếp, Lợn cắp nách",
        shortDesc: "Thị trấn sương mù xinh đẹp ẩn mình trên dãy Hoàng Liên Sơn, nổi tiếng với những thửa ruộng bậc thang đẹp như tranh vẽ.",
        description: "Sa Pa nằm ở độ cao trung bình từ 1.500m đến 1.800m so với mực nước biển, có khí hậu ôn đới quanh năm mát mẻ với cảnh quan thiên nhiên tráng lệ. Nơi đây sở hữu đỉnh Fansipan huyền thoại - 'Nóc nhà Đông Dương' cao 3.143m mà bất kỳ du khách nào cũng mong ước chinh phục. Bên cạnh ruộng bậc thang xanh ngát uốn lượn được bình chọn là một trong những cảnh quan đẹp nhất thế giới, Sa Pa còn là nơi sinh sống lâu đời của các đồng bào dân tộc thiểu số như H'Mông, Dao đỏ, Tày... mang đến những nét văn hóa bản địa độc đáo cùng các chợ phiên vô cùng sinh động.",
        gallery: [
            "https://cdn.pixabay.com/photo/2017/09/20/05/18/sapa-2767485_1280.jpg",
            "https://cdn.tgdd.vn/Files/2021/03/23/1337530/thit-trau-gac-bep-la-dac-san-gi-ma-gia-1-2-trieu-kg-van-duoc-san-don-202112301203571493.jpg",
            "https://puolotrip.com/uploads/images/2023/09/mount-Fansipan-summit-view-1-jpg.webp",
            "https://bizweb.dktcdn.net/100/257/841/files/tong-hop-nhung-hinh-anh-hoa-ban-trang-dep-nhat-nui-rung-tay-bac-15.jpg?v=1715023536021"
        ],
    },
    {
        id: "trangan",
        name: "Tràng An Ninh Bình",
        region: "North",
        regionName: "Miền Bắc",
        image: "./images/trangan.jpg",
        address: "Huyện Hoa Lư, tỉnh Ninh Bình",
        cost: "1,200,000đ - 2,500,000đ",
        food: "Cơm cháy Ninh Bình, Thịt dê núi, Nem chua Yên Mạc",
        shortDesc: "Di sản thế giới hỗn hợp duy nhất của Việt Nam, nổi bật với cảnh sắc sơn thủy hữu tình và những đền đài cổ kính.",
        description: "Quần thể danh thắng Tràng An được UNESCO công nhận là Di sản Thế giới kép nhờ giá trị văn hóa nổi bật và vẻ đẹp tự nhiên ngoạn mục. Tràng An được ví như 'Vịnh Hạ Long trên cạn' với hệ thống dãy núi đá vôi uốn lượn phủ thảm thực vật nhiệt đới xanh mướt, ôm trọn các dòng sông trong vắt, tĩnh lặng chảy qua hàng chục hang động tự nhiên huyền bí. Du khách sẽ được trải nghiệm lênh đênh trên những con thuyền chèo tay mộc mạc, thưởng ngoạn núi non hùng vĩ, ghé thăm đền Trình, đền Trần và chiêm ngưỡng bối cảnh tuyệt tác trong các bộ phim bom tấn quốc tế nổi tiếng.",
        gallery: [
            "https://bizweb.dktcdn.net/100/514/026/files/com-chay-ninh-binh-2.jpg?v=1765111097782",
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/Goats_in_Ninh_H%E1%BA%A3i%2C_Ninh_Binh_province%2C_Vietnam%2C_20240201_1521_4869.jpg",
            "https://timtour.vn/files/images/Mua-gi-lam-qua/Nem-chua-yen-mac%20(4).PNG",
            "https://puluongexcursions.com/wp-content/uploads/2023/05/image1-19.jpg"
        ],
    },
    {
        id: "danang",
        name: "Đà Nẵng",
        region: "Center",
        regionName: "Miền Trung",
        image: "./images/danang.jpg",
        address: "Thành phố Đà Nẵng, Việt Nam",
        cost: "2,000,000đ - 6,000,000đ",
        food: "Mì Quảng, Bánh tráng cuốn thịt heo, Chả bò Đà Nẵng",
        shortDesc: "Thành phố đáng sống nhất Việt Nam sở hữu bãi biển Mỹ Khê tuyệt đẹp và Cầu Vàng lừng danh thế giới.",
        description: "Đà Nẵng sở hữu vị trí đắc địa được thiên nhiên ưu ái tựa lưng vào núi, hướng mặt ra biển Đông rộng lớn. Thành phố ghi dấu ấn sâu đậm trong lòng bạn bè thế giới bởi Cầu Vàng (Sun World Ba Na Hills) nâng đỡ bởi đôi bàn tay đá khổng lồ mờ sương núi Chúa, Ngũ Hành Sơn huyền ảo và bán đảo Sơn Trà hoang sơ nơi sinh sống của loài Voọc chà vá chân nâu quý hiếm. Đà Nẵng có dịch vụ du lịch chuyên nghiệp bậc nhất, các bãi tắm cát trắng miên man sóng vỗ, cùng màn trình diễn pháo hoa quốc tế (DIFF) và ánh đèn rực rỡ của Cầu Rồng phun lửa vào mỗi tối cuối tuần.",
        gallery: [
            "https://halotravel.vn/wp-content/uploads/2020/03/bien-my-khe-1.jpg",
            "https://daivietourist.vn/wp-content/uploads/2024/10/mi-quang-da-nang.jpg.webp",
            "https://motogo.vn/wp-content/uploads/2023/10/cau-rong-da-nang-9-e1714877852995.jpg",
            "https://images2.thanhnien.vn/528068263637045248/2024/3/27/ban-sao-cua-sun-world-ba-na-hills-4-17115055398311570071595.jpg"
        ],
    },
    {
        id: "hoian",
        name: "Hội An",
        region: "Center",
        regionName: "Miền Trung",
        image: "./images/hoian.jpg",
        address: "Thành phố Hội An, tỉnh Quảng Nam",
        cost: "1,500,000đ - 3,500,000đ",
        food: "Cao lầu Hội An, Cơm gà Phố Hội, Bánh mì Phượng",
        shortDesc: "Đô thị cổ trầm mặc được thắp sáng bởi hàng ngàn chiếc đèn lồng lung linh soi bóng bên dòng sông Hoài thơ mộng.",
        description: "Phố cổ Hội An là thương cảng sầm uất mang tầm quốc tế từ thế kỷ XV đến XIX, lưu giữ gần như nguyên vẹn quần thể kiến trúc gồm hơn 1.000 ngôi nhà gỗ mái ngói rêu phong, hội quán Trung Hoa rực rỡ và những chiếc cầu gỗ mang dấu ấn Nhật Bản (Chùa Cầu). Không gian yên ả không tiếng còi xe máy vào buổi tối khiến du khách như lạc vào một thế giới yên bình lãng mạn vô bờ. Bạn có thể chèo thuyền thả hoa đăng ước nguyện trên sông Hoài mộng mơ, thưởng thức tiếng ca bài chòi sâu lắng và cảm nhận trọn vẹn nét tinh hoa ấm áp của con người xứ Quảng hiền hậu.",
        gallery: [
            "https://danangfantasticity.com/wp-content/uploads/2025/09/tong-hop-cac-mon-an-nhat-dinh-phai-thu-khi-den-da-nang-hoi-an-CAO-LAU-03.jpg",
            "https://daivietourist.vn/wp-content/uploads/2025/06/com-ga-hoi-an-1.jpg",
            "https://mia.vn/media/uploads/blog-du-lich/song-hoai-hoi-an-dong-song-nho-nep-minh-yen-binh-ben-pho-co-8-1618325597.jpg",
            "https://mia.vn/media/uploads/blog-du-lich/chua-cau-hoi-an-bieu-tuong-kien-truc-pho-hoi-5-1722841903.jpg"
        ],
    },
    {
        id: "hue",
        name: "Huế",
        region: "Center",
        regionName: "Miền Trung",
        image: "./images/hue.jpg",
        address: "Thành phố Huế, tỉnh Thừa Thiên Huế",
        cost: "1,500,000đ - 3,500,000đ",
        food: "Bún bò Huế, Bánh bột lọc, Cơm hến vĩ dạ, Chè cung đình",
        shortDesc: "Cố đô triều Nguyễn uy nghiêm cổ kính, lưu giữ nguyên vẹn hồn cốt kiến trúc hoàng cung và nhã nhạc cung đình Huế.",
        description: "Thành phố Huế mang nét đẹp thơ mộng, tĩnh lặng bên dòng sông Hương hiền hòa chảy qua Kinh thành nguy nga đồ sộ được xây dựng từ triều Nguyễn hơn hai thế kỷ trước. Nơi đây là trung tâm chính trị, văn hóa, tôn giáo dưới triều đại quân chủ cuối cùng Việt Nam với quần thể di tích Đại Nội cổ kính gồm Ngọ Môn, Điện Thái Hòa, Thế Miếu, kết hợp các lăng tẩm hoàng gia đậm nét nghệ thuật phong thủy như Lăng Tự Đức, Khải Định. Du khách cũng có thể lắng lòng nghe ca Huế trên thuyền rồng đêm trăng thơ mộng hoặc ghé thăm ngôi chùa cổ kính linh thiêng bậc nhất xứ thần kinh - Thiên Mụ tự.",
        gallery: [
            "https://bizweb.dktcdn.net/100/495/603/products/352521770-6922050131.jpg?v=1747542575680",
            "https://dulichconvoi.com/wp-content/uploads/2021/05/review-dia-diem-ngam-hoang-hon-tai-hue-lang-man-nhat-1639485805.jpg",
            "https://quangbinhtravel.vn/wp-content/uploads/2025/03/chua-thien-mu-2-1024x740.jpg",
            "https://aeonmall-review-rikkei.cdn.vccloud.vn/website/21/articles/June2025/7FMXRqp4tLnVWXZuLizL.jpg"
        ],
    },
    {
        id: "nhatrang",
        name: "Nha Trang",
        region: "Center",
        regionName: "Miền Trung",
        image: "./images/nhatrang.jpg",
        address: "Thành phố Nha Trang, tỉnh Khánh Hòa",
        cost: "2,500,000đ - 7,000,000đ",
        food: "Bún chả cá Nha Trang, Nem nướng Ninh Hòa, Tôm hùm Bình Ba",
        shortDesc: "Thiên đường nghỉ dưỡng biển nhiệt đới với một trong những vịnh biển đẹp nhất thế giới cùng nhiều trò chơi kỳ thú.",
        description: "Nha Trang từ lâu đã nổi tiếng with bãi cát dài hình cánh cung vàng óng mịn màng, hướng nhìn ra vịnh biển xanh thẳm ngập tràn ánh nắng ấm quanh năm. Vịnh Nha Trang quy tụ hàng loạt hòn đảo xinh đẹp hoang sơ như Hòn Tre, Hòn Tằm, Hòn Mun - nơi có thảm san hô rực rỡ sắc màu được bảo tồn vô cùng nghiêm ngặt, tạo cơ hội cho du khách lặn biển bình dưỡng khí thú vị. Nha Trang kết hợp hoàn mỹ các resort cao cấp, khu phức hợp giải trí quy mô quốc tế và vẻ đẹp lịch sử văn hóa Chăm cổ kính thể hiện qua Tháp Bà Ponagar nghìn năm tuổi uy nghiêm soi bóng xuống hạ nguồn dòng sông Cái xinh đẹp.",
        gallery: [
            "https://static.vinwonders.com/2022/06/bun-ca-nha-trang-banner.jpg",
            "https://motogo.vn/wp-content/uploads/2023/05/Hon-Tam-Nha-Trang-22.jpg",
            "https://static.vinwonders.com/production/thoi-diem-ly-tuong-di-hon-tre-nha-trang.jpg",
            "https://baotuyenquang.com.vn/media/images/2024/03/img_20240308095035.jpeg"
        ],
    },
    {
        id: "dalat",
        name: "Đà Lạt",
        region: "Center",
        regionName: "Miền Trung",
        image: "./images/dalat.jpg",
        address: "Thành phố Đà Lạt, tỉnh Lâm Đồng",
        cost: "1,800,000đ - 4,500,000đ",
        food: "Lẩu gà lá é, Bánh ướt lòng gà, Bánh tráng nướng, Hồng treo gió",
        shortDesc: "Thành phố ngàn hoa thanh bình yên ả trên cao nguyên Lâm Viên sương mù với những dinh thự Pháp cổ kính lãng mạn.",
        description: "Đà Lạt nằm ẩn mình giữa những rừng thông xanh ngút ngàn của Tây Nguyên đất đỏ bazan ở độ cao 1.500m, mang không khí se lạnh, trong lành thanh khiết. Nơi đây là chốn hẹn ước ngọt ngào của tình yêu thơ mộng nhờ những đồi hoa cẩm tú cầu kiêu sa, thung lũng tình yêu, hồ Xuân Hương êm ả lộng gió và thác Datanla hùng vĩ. Ngoài ra, kiến trúc biệt thự châu Âu cổ điển từ đầu thế kỷ trước kết hợp các quán cà phê ngập tràn sắc hoa lãng mạn khiến Đà Lạt trở thành nơi nghỉ dưỡng thanh tao lý tưởng để xua tan đi nhịp sống ồn ào vội vã nơi phố thị đông đúc.",
        gallery: [
            "https://zoomtravel.vn/upload/images/ho-o-da-lat-dep.jpg",
            "https://sakos.vn/wp-content/uploads/2023/05/tan-huong-khong-gian-song-ao-tuyet-dep-tai-da-lat-4.jpg",
            "https://tour.dulichvietnam.com.vn/uploads/tour/1643275060_2-1.jpg",
            "https://vietmaptravel.vn/wp-content/uploads/2025/06/hong-treo-gio-da-lat-02.jpeg"
        ],
    },
    {
        id: "phuquoc",
        name: "Phú Quốc",
        region: "South",
        regionName: "Miền Nam",
        image: "./images/phuquoc.jpg",
        address: "Thành phố Phú Quốc, tỉnh Kiên Giang",
        cost: "3,000,000đ - 10,000,000đ",
        food: "Gỏi cá trích, Nhum biển nướng mỡ hành, Ghẹ Hàm Ninh",
        shortDesc: "Đảo Ngọc xinh đẹp, hòn đảo lớn nhất Việt Nam sở hữu những bờ biển hoang sơ cùng hệ thống nghỉ dưỡng chuẩn thượng lưu.",
        description: "Đảo Ngọc Phú Quốc ẩn chứa sức quyến rũ bất tận nhờ những dải cát mịn trắng muốt như kem bên bãi Sao, bãi Khem hoang sơ, làn nước biển trong vắt như gương ngập tràn rạn san hô kỳ ảo. Nơi đây đã lột xác thành trung tâm du lịch nghỉ dưỡng giải trí tầm cỡ thế giới với quần thể Grand World, cáp treo Hòn Thơm vượt biển dài nhất hành tinh và các khu nghỉ dưỡng sinh thái biệt lập 6 sao cao cấp. Bên cạnh đó, bạn cũng có thể tìm về nét bình dị nguyên sơ tại các làng chài cổ kính lâu đời Hàm Ninh, nhà ga nước mắm truyền thống và các vườn tiêu thơm ngát bạt ngàn nổi tiếng.",
        gallery: [
            "https://image.vietnamnews.vn/uploadvnnews/Article/2024/8/1/364105_JWPQ-recipe-food.jpg",
            "https://mtcs.1cdn.vn/2023/03/23/quan-dao-an-thoi-phu-quoc.jpg",
            "https://ktmt.vnmediacdn.com/images/2025/04/25/98-1745565559-phu-quoc.jpg",
            "https://hanoitourist.vn/sites/default/files/2026/03/img4109-16128501450771564651202_0.jpg"
        ],
    },
    {
        id: "cantho",
        name: "Cần Thơ",
        region: "South",
        regionName: "Miền Nam",
        image: "./images/cantho.jpg",
        address: "Thành phố Cần Thơ, Việt Nam",
        cost: "1,200,000đ - 3,000,000đ",
        food: "Lẩu mắm Dạ Lý, Bánh cống Cần Thơ, Nem nướng Cái Răng",
        shortDesc: "Thủ phủ Tây Đô thân thương bình dị mang nét đặc trưng sông nước miền Tây với chợ nổi Cái Răng nổi tiếng nhộn nhịp.",
        description: "Cần Thơ là trung tâm kinh tế xã hội trù phú của đồng bằng sông Cửu Long, ôm trọn vẻ đẹp hiền hòa, trĩu quả của miền phù sa Tây Nam Bộ sông nước hữu tình. Nhắc đến Cần Thơ, du khách sẽ nhớ ngay đến hình ảnh bình minh lên lãng mạn trên chợ nổi Cái Răng - nơi hàng trăm ghe xuồng buôn bán nông sản nhộn nhịp, bến Ninh Kiều lộng gió soi bóng sông Hậu giăng đầy ánh đèn lãng mạn và vườn cây ăn trái sum suê trĩu quả Mỹ Khánh ngọt ngào, cùng tấm lòng mến khách bao dung đôn hậu của con người miền Tây Nam Bộ ấm áp.",
        gallery: [
            "hhttps://statics.vinpearl.com/cho-noi-cai-rang-2_1624262882.jpg",
            "https://statics.vinpearl.com/banh-cong-can-tho-4_1630225448.jpg",
            "https://datviettour.com.vn/uploads/images/tin-tuc-SEO/mien-tay/Can-tho/ben-ninh-kieu.jpeg",
            "https://cdn3.ivivu.com/2025/03/du-lich-can-tho-ivivu-1-1-1024x683.jpg"
        ],
    }
];

// 2. DOM ELEMENT CACHE
const destinationsGrid = document.getElementById("destinations-grid");
const noResults = document.getElementById("no-results");
const regionFilter = document.getElementById("region-filter");
const destSearchInput = document.getElementById("dest-search-input");
const heroSearchInput = document.getElementById("hero-search-input");
const heroSearchBtn = document.getElementById("hero-search-btn");

const mainHeader = document.getElementById("main-header");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const backToTopBtn = document.getElementById("back-to-top");

// Modal Cache
const destinationModal = document.getElementById("destination-modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalRegion = document.getElementById("modal-region");
const modalAddress = document.getElementById("modal-address");
const modalDescription = document.getElementById("modal-description");
const modalCost = document.getElementById("modal-cost");
const modalFood = document.getElementById("modal-food");
const modalMainImage = document.getElementById("modal-main-image");
const modalGallery = document.getElementById("modal-gallery");

// Auth Modal Cache
const authModal = document.getElementById("auth-modal");
const authClose = document.getElementById("auth-close");
const authTitle = document.getElementById("auth-title");
const btnLogin = document.getElementById("btn-login");
const btnRegister = document.getElementById("btn-register");

// State values
let currentFilter = "all";
let currentSearchQuery = "";

// 3. INITIALIZATION & RENDERING
document.addEventListener("DOMContentLoaded", () => {
    // Initial Render
    if (destinationsGrid) {
        renderDestinations(destinationsData);
    }
    
    // Auto Slideshow Runner
    initHeroSlider();
    
    // Scroll Events
    window.addEventListener("scroll", handleScroll);
    
    // Event Listeners setup
    setupEventListeners();
});

// Setup All Interactive Events
function setupEventListeners() {
    // Menu mobile toggle
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            const icon = menuToggle.querySelector("i");
            if (navMenu.classList.contains("open")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });
    }

    // Close menu when clicking link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            document.querySelectorAll(".nav-link").forEach(el => el.classList.remove("active"));
            link.classList.add("active");
            if (navMenu) navMenu.classList.remove("open");
            const icon = menuToggle ? menuToggle.querySelector("i") : null;
            if (icon) icon.className = "fa-solid fa-bars";
        });
    });

    // Region buttons filtration
    if (regionFilter) {
        regionFilter.addEventListener("click", (e) => {
            if (e.target.classList.contains("filter-btn")) {
                document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
                e.target.classList.add("active");
                currentFilter = e.target.getAttribute("data-filter");
                filterAndSearchData();
            }
        });
    }

    // Search bar event listeners
    if (destSearchInput) {
        destSearchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value;
            filterAndSearchData();
        });
    }

    // Hero search input syncing & scroll to results
    if (heroSearchBtn && heroSearchInput) {
        heroSearchBtn.addEventListener("click", () => {
            currentSearchQuery = heroSearchInput.value;
            if (destSearchInput) destSearchInput.value = currentSearchQuery;
            
            // Sync filter active state to 'all' if user performs high-level search
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            const allFilterBtn = document.querySelector("[data-filter='all']");
            if (allFilterBtn) allFilterBtn.classList.add("active");
            currentFilter = "all";
            
            filterAndSearchData();
            
            // Scroll elegantly to destinations view section
            const destSection = document.getElementById("destinations");
            if (destSection) {
                destSection.scrollIntoView({ behavior: "smooth" });
            }
        });

        // Enter press on hero input
        heroSearchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                heroSearchBtn.click();
            }
        });
    }

    // Modal closing events
    if (modalClose) modalClose.addEventListener("click", closeModalWindow);
    if (destinationModal) {
        destinationModal.addEventListener("click", (e) => {
            if (e.target === destinationModal) {
                closeModalWindow();
            }
        });
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModalWindow();
            closeAuthModal();
        }
    });

    // Scroll to Top action
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Auth events trigger
    if (btnLogin) btnLogin.addEventListener("click", () => openAuthModal("Đăng nhập"));
    if (btnRegister) btnRegister.addEventListener("click", () => openAuthModal("Đăng ký thành viên"));
    if (authClose) authClose.addEventListener("click", closeAuthModal);
    if (authModal) {
        authModal.addEventListener("click", (e) => {
            if (e.target === authModal) {
                closeAuthModal();
            }
        });
    }
}

// 4. BUSINESS LOGIC: FILTER & REAL-TIME SEARCH
function filterAndSearchData() {
    const filtered = destinationsData.filter(item => {
        // Filter match logic
        const matchesRegion = currentFilter === "all" || item.region === currentFilter;
        
        // Search match logic (search by name, address, food, or region)
        const query = currentSearchQuery.toLowerCase().trim();
        const matchesSearch = !query || 
            item.name.toLowerCase().includes(query) || 
            item.address.toLowerCase().includes(query) || 
            item.food.toLowerCase().includes(query) || 
            item.regionName.toLowerCase().includes(query);
            
        return matchesRegion && matchesSearch;
    });

    renderDestinations(filtered);
}

// Render dynamic destination cards into Grid layout
function renderDestinations(data) {
    if (!destinationsGrid) return;
    destinationsGrid.innerHTML = "";
    
    if (data.length === 0) {
        if (noResults) noResults.style.display = "block";
        destinationsGrid.style.display = "none";
        return;
    }
    
    if (noResults) noResults.style.display = "none";
    destinationsGrid.style.display = "grid";

    const isSubPage = window.location.pathname.includes('/pages/');

    data.forEach((item, index) => {
        const card = document.createElement("article");
        card.className = "destination-card";
        
        // Adjust relative path for images if on subpage
        const finalImgSrc = isSubPage ? item.image.replace(/^\.\//, '../') : item.image;

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${finalImgSrc}" alt="${item.name}" class="card-img" loading="lazy">
                <span class="card-region-tag">${item.regionName}</span>
                <span class="card-cost-tag">${item.cost.split(' ')[0]}...</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-address"><i class="fa-solid fa-location-dot"></i> <span>${item.address}</span></p>
                <p class="card-desc">${item.shortDesc}</p>
                
                <div class="card-details">
                    <div class="card-detail-item">
                        <i class="fa-solid fa-wallet"></i>
                        <span>Chi phí: <strong>${item.cost}</strong></span>
                    </div>
                    <div class="card-detail-item">
                        <i class="fa-solid fa-utensils"></i>
                        <span>Đặc sản: <strong>${item.food.split(', ')[0]}, ${item.food.split(', ')[1] || ''}</strong></span>
                    </div>
                </div>
                
                <button class="btn-more" data-id="${item.id}">
                    Xem thêm <i class="fa-solid fa-arrow-right-long"></i>
                </button>
            </div>
        `;
        
        destinationsGrid.appendChild(card);
        
        // Trigger micro-animation offset on enter viewport
        setTimeout(() => {
            card.classList.add("fade-in");
        }, index * 80);
    });

    // Bind event listeners to new generated "Xem thêm" buttons
    document.querySelectorAll(".btn-more").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            openDestinationModal(id);
        });
    });
}

// 5. INTERACTIVE HERO AUTOMATIC SLIDESHOW SLIDER
function initHeroSlider() {
    const slides = document.querySelectorAll("#hero-slider .slide");
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    const slideInterval = 6000; // Switch image every 6 seconds smoothly

    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, slideInterval);
}

// 6. SCROLL AND HEADER STICKY HANDLER
function handleScroll() {
    const scrollY = window.scrollY;
    
    // Header shrinking sticky transitions
    if (mainHeader) {
        if (scrollY > 50) {
            mainHeader.classList.add("sticky");
        } else {
            mainHeader.classList.remove("sticky");
        }
    }

    // Back-to-top button appearance
    if (backToTopBtn) {
        if (scrollY > 500) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    }
}

// 7. DETAILED POPUP MODAL FUNCTIONALITY
function openDestinationModal(id) {
    const dest = destinationsData.find(item => item.id === id);
    if (!dest) return;

    if (modalTitle) modalTitle.textContent = dest.name;
    if (modalRegion) modalRegion.textContent = dest.regionName;
    if (modalAddress) modalAddress.textContent = dest.address;
    if (modalDescription) modalDescription.textContent = dest.description;
    if (modalCost) modalCost.textContent = dest.cost;
    if (modalFood) modalFood.textContent = dest.food;
    
    // Set main picture view
    if (modalMainImage) {
        const isSubPage = window.location.pathname.includes('/pages/');
        const finalImgSrc = isSubPage ? dest.image.replace(/^\.\//, '../') : dest.image;
        modalMainImage.src = finalImgSrc;
        modalMainImage.alt = dest.name;
    }

    // Populate gallery thumbnails dynamically
    if (modalGallery) {
        modalGallery.innerHTML = "";
        dest.gallery.forEach((imgUrl, idx) => {
            const thumb = document.createElement("div");
            thumb.className = `gallery-thumb ${idx === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${imgUrl}" alt="Gallery Thumbnail ${idx + 1}" loading="lazy">`;
            
            // Thumbnail click swaps modalMainImage
            thumb.addEventListener("click", () => {
                document.querySelectorAll(".gallery-thumb").forEach(t => t.classList.remove("active"));
                thumb.classList.add("active");
                if (modalMainImage) modalMainImage.src = imgUrl;
            });

            modalGallery.appendChild(thumb);
        });
    }

    // Show popup & lock back scrolling
    if (destinationModal) destinationModal.classList.add("open");
    document.body.classList.add("modal-open");
}

function closeModalWindow() {
    if (destinationModal) destinationModal.classList.remove("open");
    document.body.classList.remove("modal-open");
}

// 8. AUTHENTICATE QUICK SYSTEM
function openAuthModal(modeTitle) {
    if (authTitle) authTitle.textContent = modeTitle;
    if (authModal) authModal.style.display = "flex";
}

function closeAuthModal() {
    if (authModal) authModal.style.display = "none";
}
