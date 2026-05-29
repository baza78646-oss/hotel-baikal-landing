1. **Update `index.html` to include Font Awesome**:
   - Add `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">` to `<head>`.

2. **Replace Lucide icons in "Мы предлагаем" and "Наши номера" with Font Awesome**:
   - Бесплатный Wi-Fi -> `fa-solid fa-wifi`
   - Круглосуточный доступ -> `fa-solid fa-clock` (or `fa-user-clock`)
   - Телевизор -> `fa-solid fa-tv`
   - Парковка -> `fa-solid fa-parking`
   - Влажная уборка -> `fa-solid fa-broom`
   - Банно-прачечный комплекс -> `fa-solid fa-soap` (or `fa-jug-detergent` / `fa-tshirt` / `fa-bath`)
   - Собственная кухня -> `fa-solid fa-utensils`
   - Банкетный зал -> `fa-solid fa-glass-cheers`
   - Просторная столовая -> `fa-solid fa-hotdog`

3. **Replace image placeholders with generated unDraw SVGs**:
   - In "2. Hero Section", replace `[ Иллюстрация гостиницы ]` placeholder with an `<img src="assets/img/travel_booking.svg" alt="Hotel Booking">` or inline the SVG. Since we have standard svgs, let's include them in the `assets/img/` folder and use `<img>` tags.
   - In "3. About Section", replace `[ Иллюстрация ресепшена ]` placeholder with an `<img src="assets/img/hotel.svg" alt="Hotel Reception">` or inline it.
   - Note: we will remove the gray background wrappers `bg-gray-200 border-4` and just show the SVG cleanly.

4. **Run tests/pre-commit**:
   - Call `pre_commit_instructions` tool and complete verification.

5. **Submit**:
   - Use the `submit` tool to finalize.
