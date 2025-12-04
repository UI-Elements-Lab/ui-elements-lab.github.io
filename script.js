// Используем Яндекс Картинки через стабильные ссылки
const seasonsData = {
    winter: {
        name: "ЗИМА",
        icon: "❄️",
        color: "#1e3c72",
        description: "Самый холодный сезон года, время снега, льда и Новогодних праздников",
        months: [
            {
                name: "ДЕКАБРЬ",
                icon: "🎄",
                image: "https://avatars.mds.yandex.net/i?id=b0c9b0895edb3bf8b5e28464218bf56f-5505805-images-thumbs&n=13",
                description: "Первый месяц зимы, начало снегопадов и подготовка к Новому году",
                order: 12
            },
            {
                name: "ЯНВАРЬ",
                icon: "⛄",
                image: "https://avatars.mds.yandex.net/i?id=0da150fbb54b12c7aecbe0ce5e0d8e4e-5887893-images-thumbs&n=13",
                description: "Середина зимы, самые сильные морозы и Новогодние каникулы",
                order: 1
            },
            {
                name: "ФЕВРАЛЬ",
                icon: "🌨️",
                image: "https://avatars.mds.yandex.net/i?id=3e04330c82cc89d83e0fbf0b7f13ca6a-5877714-images-thumbs&n=13",
                description: "Последний месяц зимы, метели и начало потепления",
                order: 2
            }
        ]
    },
    spring: {
        name: "ВЕСНА",
        icon: "🌱",
        color: "#00b09b",
        description: "Сезон пробуждения природы, таяния снега и первых цветов",
        months: [
            {
                name: "МАРТ",
                icon: "🌸",
                image: "https://avatars.mds.yandex.net/i?id=6805a85acfb976de88ed58e1027fb9b5-5505953-images-thumbs&n=13",
                description: "Первый месяц весны, сходит снег, появляются проталины",
                order: 3
            },
            {
                name: "АПРЕЛЬ",
                icon: "🌧️",
                image: "https://avatars.mds.yandex.net/i?id=56c77d4ce89623800dc8d2968d65e6e8-5505812-images-thumbs&n=13",
                description: "Середина весны, распускаются почки, идут дожди",
                order: 4
            },
            {
                name: "МАЙ",
                icon: "🌺",
                image: "https://avatars.mds.yandex.net/i?id=3061f41fb5ce7e676c52a4e5e63a6942-5877940-images-thumbs&n=13",
                description: "Последний месяц весны, всё цветёт, наступает тепло",
                order: 5
            }
        ]
    },
    summer: {
        name: "ЛЕТО",
        icon: "☀️",
        color: "#f46b45",
        description: "Самый тёплый сезон, время отпусков, пляжей и зелени",
        months: [
            {
                name: "ИЮНЬ",
                icon: "🌻",
                image: "https://avatars.mds.yandex.net/i?id=6b29d9a28f84b9c620b6c8027ba9c269-5505928-images-thumbs&n=13",
                description: "Начало лета, самые длинные дни, цветение липы",
                order: 6
            },
            {
                name: "ИЮЛЬ",
                icon: "🔥",
                image: "https://avatars.mds.yandex.net/i?id=9d1ed318a90bf4d1d7a0e64c2b8f3da4-5516033-images-thumbs&n=13",
                description: "Середина лета, самая жара, созревают ягоды",
                order: 7
            },
            {
                name: "АВГУСТ",
                icon: "🏖️",
                image: "https://avatars.mds.yandex.net/i?id=57e7da9da178fad7593e33b0c91c264d-5505912-images-thumbs&n=13",
                description: "Конец лета, первые ночные похолодания, сбор урожая",
                order: 8
            }
        ]
    },
    autumn: {
        name: "ОСЕНЬ",
        icon: "🍂",
        color: "#8e2de2",
        description: "Сезон золотых листьев, дождей и подготовки к зиме",
        months: [
            {
                name: "СЕНТЯБРЬ",
                icon: "🍁",
                image: "https://avatars.mds.yandex.net/i?id=38b25056445a7229d079a01c9d57f448-5505923-images-thumbs&n=13",
                description: "Начало осени, первые жёлтые листья, ещё тепло",
                order: 9
            },
            {
                name: "ОКТЯБРЬ",
                icon: "🌧️",
                image: "https://avatars.mds.yandex.net/i?id=6432fde70b2faf16fa52715782d26c0e-5877717-images-thumbs&n=13",
                description: "Середина осени, золотая листва, первые заморозки",
                order: 10
            },
            {
                name: "НОЯБРЬ",
                icon: "🌫️",
                image: "https://avatars.mds.yandex.net/i?id=7ee6baee6efcb2aa2fb52d2e3908c332-5505914-images-thumbs&n=13",
                description: "Конец осени, голые деревья, дожди со снегом",
                order: 11
            }
        ]
    }
};

let currentView = 'all';
let currentSort = 'asc';
let isListView = false;

// Показываем все месяцы при загрузке
document.addEventListener('DOMContentLoaded', () => {
    showAll();
    simulateLoading();
});

function simulateLoading() {
    const loading = document.getElementById('loading');
    loading.style.display = 'block';
    setTimeout(() => {
        loading.style.display = 'none';
    }, 800);
}

function showSeason(season) {
    currentView = season;
    const data = seasonsData[season];
    
    document.getElementById('title').textContent = `${data.icon} ${data.name}`;
    document.getElementById('season-info').textContent = data.description;
    document.getElementById('image-counter').textContent = '3';
    
    renderGallery(data.months.map(month => ({
        ...month,
        season: season,
        seasonName: data.name,
        seasonIcon: data.icon,
        seasonColor: data.color
    })));
}

function showAll() {
    currentView = 'all';
    document.getElementById('title').textContent = '🌈 ВСЕ СЕЗОНЫ';
    document.getElementById('season-info').textContent = 'Все 12 месяцев, распределённые по 4 временам года';
    document.getElementById('image-counter').textContent = '12';
    
    let allMonths = [];
    const order = currentSort === 'asc' ? ['winter', 'spring', 'summer', 'autumn'] 
                                        : ['autumn', 'summer', 'spring', 'winter'];
    
    order.forEach(season => {
        seasonsData[season].months.forEach(month => {
            allMonths.push({
                ...month,
                season: season,
                seasonName: seasonsData[season].name,
                seasonIcon: seasonsData[season].icon,
                seasonColor: seasonsData[season].color
            });
        });
    });
    
    renderGallery(allMonths);
}

function sortAsc() {
    currentSort = 'asc';
    if (currentView === 'all') {
        showAll();
    } else {
        const title = document.getElementById('title');
        const original = title.textContent.replace('(↓)', '').replace('(↑)', '');
        title.textContent = original + ' (↓)';
    }
    animateSortButton();
}

function sortDesc() {
    currentSort = 'desc';
    if (currentView === 'all') {
        showAll();
    } else {
        const title = document.getElementById('title');
        const original = title.textContent.replace('(↓)', '').replace('(↑)', '');
        title.textContent = original + ' (↑)';
    }
    animateSortButton();
}

function toggleView() {
    isListView = !isListView;
    const gallery = document.getElementById('gallery');
    const viewIcon = document.getElementById('view-icon');
    
    if (isListView) {
        gallery.classList.add('list-view');
        viewIcon.className = 'fas fa-th-large';
    } else {
        gallery.classList.remove('list-view');
        viewIcon.className = 'fas fa-th';
    }
    
    // Анимация переключения
    gallery.style.animation = 'none';
    setTimeout(() => {
        gallery.style.animation = 'fadeIn 0.5s ease';
    }, 10);
}

function searchSeason() {
    const searchText = document.getElementById('search').value.toLowerCase().trim();
    
    if (!searchText) {
        if (currentView === 'all') {
            showAll();
        } else {
            showSeason(currentView);
        }
        return;
    }
    
    // Анимация поиска
    const searchInput = document.getElementById('search');
    searchInput.style.transform = 'scale(0.95)';
    setTimeout(() => {
        searchInput.style.transform = 'scale(1)';
    }, 200);
    
    // Поиск по сезонам
    for (const [key, season] of Object.entries(seasonsData)) {
        if (season.name.toLowerCase().includes(searchText) || 
            season.description.toLowerCase().includes(searchText)) {
            showSeason(key);
            highlightSearch(season.name);
            return;
        }
    }
    
    // Поиск по месяцам
    let foundMonths = [];
    for (const [seasonKey, season] of Object.entries(seasonsData)) {
        season.months.forEach(month => {
            if (month.name.toLowerCase().includes(searchText) || 
                month.description.toLowerCase().includes(searchText)) {
                foundMonths.push({
                    ...month,
                    season: seasonKey,
                    seasonName: season.name,
                    seasonIcon: season.icon,
                    seasonColor: season.color
                });
            }
        });
    }
    
    if (foundMonths.length > 0) {
        document.getElementById('title').textContent = `🔍 РЕЗУЛЬТАТЫ ПОИСКА: "${searchText}"`;
        document.getElementById('season-info').textContent = `Найдено ${foundMonths.length} совпадений`;
        document.getElementById('image-counter').textContent = foundMonths.length;
        renderGallery(foundMonths);
    } else {
        document.getElementById('title').textContent = '❌ НИЧЕГО НЕ НАЙДЕНО';
        document.getElementById('season-info').textContent = 'Попробуйте другой запрос';
        document.getElementById('gallery').innerHTML = `
            <div class="month-card" style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <h3>😞 По запросу "${searchText}" ничего не найдено</h3>
                <p>Попробуйте поискать по названию сезона или месяца</p>
            </div>
        `;
    }
}

function highlightSearch(text) {
    const title = document.getElementById('title');
    const original = title.textContent;
    const regex = new RegExp(`(${text})`, 'gi');
    title.innerHTML = original.replace(regex, '<span class="highlight">$1</span>');
}

function renderGallery(months) {
    const gallery = document.getElementById('gallery');
    
    gallery.innerHTML = months.map(month => `
        <div class="month-card ${month.season}" onclick="openPreview('${month.image}', '${month.name}', '${month.description}', '${month.seasonName}', '${month.seasonIcon}')">
            <img src="${month.image}" alt="${month.name}" loading="lazy"
                 onerror="this.src='https://via.placeholder.com/400x300/333/fff?text=${month.name}'">
            <div class="card-content">
                <h3>${month.icon} ${month.name}
                    <span class="season-badge" style="background: ${month.seasonColor}">
                        ${month.seasonIcon} ${month.seasonName}
                    </span>
                </h3>
                <p>${month.description}</p>
                <div class="month-stats">
                    <div class="stat">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${month.order}-й месяц</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-palette"></i>
                        <span>${month.seasonName.toLowerCase()}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Добавляем анимацию появления карточек
    const cards = gallery.querySelectorAll('.month-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

function openPreview(image, title, description, season, icon) {
    document.getElementById('modalImage').src = image;
    document.getElementById('modalTitle').textContent = `${icon} ${title}`;
    document.getElementById('modalDesc').textContent = description;
    document.getElementById('modalSeason').textContent = `Сезон: ${season}`;
    document.getElementById('modalMonth').textContent = `Месяц: ${title}`;
    
    const modal = document.getElementById('previewModal');
    modal.style.display = 'block';
    
    // Анимация открытия
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transition = 'opacity 0.3s';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('previewModal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function animateSortButton() {
    const buttons = document.querySelectorAll('.control-btn');
    buttons.forEach(btn => {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Обработчики событий
document.getElementById('search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchSeason();
        e.target.blur();
    }
});

// Закрытие модального окна при клике вне
window.onclick = function(event) {
    const modal = document.getElementById('previewModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Закрытие модального окна по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});