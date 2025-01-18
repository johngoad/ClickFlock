const mockVideos = [
  {
    id: 1,
    username: "@dancingstar",
    description: "Check out these moves! 🕺 #dance #viral",
    likes: "1.2M",
    comments: "10.5K",
    shares: "5.2K",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4"
  },
  {
    id: 2,
    username: "@cookingpro",
    description: "Easy 5-minute recipe! 🍳 #cooking #food",
    likes: "890K",
    comments: "8.2K",
    shares: "3.1K",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-preparing-flour-for-cooking-1192-large.mp4"
  },
  {
    id: 3,
    username: "@travelbug",
    description: "Paradise found! 🌴 #travel #vacation",
    likes: "2.1M",
    comments: "15.3K",
    shares: "9.8K",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-during-sunset-1478-large.mp4"
  }
];

const mockHashtags = [
  { tag: '#dance', posts: '2.5B views', trending: true },
  { tag: '#comedy', posts: '1.8B views', trending: true },
  { tag: '#food', posts: '980M views', trending: true },
  { tag: '#gaming', posts: '750M views', trending: true },
];

const mockCategories = [
  { name: 'Entertainment', icon: '🎭', posts: '500K' },
  { name: 'Sports', icon: '⚽', posts: '300K' },
  { name: 'Music', icon: '🎵', posts: '450K' },
  { name: 'Fashion', icon: '👗', posts: '200K' },
];

const mockSuggested = [
  {
    title: 'Amazing Dance Moves',
    username: '@dancepro',
    views: '1.2M',
    likes: '85K',
    thumbnail: generateThumbnail('💃')
  },
  {
    title: 'Cooking Tutorial',
    username: '@chefmaster',
    views: '950K',
    likes: '62K',
    thumbnail: generateThumbnail('👨‍🍳')
  },
  {
    title: 'Travel Vlog',
    username: '@wanderlust',
    views: '780K',
    likes: '45K',
    thumbnail: generateThumbnail('✈️')
  },
];

const mockFilters = [
  { name: 'Normal', icon: '⚪' },
  { name: 'Retro', icon: '🌅' },
  { name: 'Vibrant', icon: '🌈' },
  { name: 'B&W', icon: '⚫' },
  { name: 'Vintage', icon: '📷' },
];

const mockSounds = [
  { title: 'Trending Hit 1', artist: 'Artist 1', duration: '0:30', uses: '1.2M' },
  { title: 'Popular Song 2', artist: 'Artist 2', duration: '0:15', uses: '850K' },
  { title: 'Viral Sound 3', artist: 'Artist 3', duration: '0:45', uses: '2.1M' },
];

const mockMessages = [
  {
    id: 1,
    username: "@dancequeen",
    avatar: "💃",
    message: "Loved your latest dance video! Want to collab?",
    time: "2h ago",
    unread: true
  },
  {
    id: 2,
    username: "@musicpro",
    avatar: "🎵",
    message: "Can I use your sound in my next video?",
    time: "5h ago",
    unread: true
  },
  {
    id: 3,
    username: "@travelbuddy",
    avatar: "✈️",
    message: "Great travel tips! Check out my latest video",
    time: "1d ago",
    unread: false
  }
];

const mockNotifications = [
  {
    id: 1,
    username: "@star_creator",
    avatar: "⭐",
    action: "liked your video",
    time: "1h ago",
    type: "like"
  },
  {
    id: 2,
    username: "@viral_dancer",
    avatar: "🕺",
    action: "started following you",
    time: "3h ago",
    type: "follow",
    actionButton: "Follow Back"
  },
  {
    id: 3,
    username: "@food_lover",
    avatar: "🍳",
    action: "commented: 'Amazing recipe!'",
    time: "5h ago",
    type: "comment"
  }
];

const mockProfileData = {
  username: "creativecoder",
  displayName: "Creative Coder",
  bio: "Building cool stuff with code 👨‍💻 ✨\nTutorials & Tech Content",
  followers: "125.4K",
  following: "892",
  likes: "1.2M",
  avatar: "👨‍💻",
  isFollowing: false,
  videos: [
    {
      id: 1,
      thumbnail: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
      views: "120.5K",
      likes: "12.3K",
      comments: "1.2K"
    },
    {
      id: 2,
      thumbnail: "https://assets.mixkit.co/videos/preview/mixkit-hands-preparing-flour-for-cooking-1192-large.mp4",
      views: "89.2K",
      likes: "9.1K",
      comments: "856"
    },
    {
      id: 3,
      thumbnail: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-during-sunset-1478-large.mp4",
      views: "256.8K",
      likes: "23.4K",
      comments: "2.1K"
    }
  ]
};

function generateThumbnail(emoji) {
  return `
    <div style="font-size: 48px; width: 100%; height: 100%; 
                display: flex; align-items: center; justify-content: center;
                background: linear-gradient(45deg, #1a1a1a, #2a2a2a);">
      ${emoji}
    </div>
  `;
}

function createVideoElement(video) {
  const videoItem = document.createElement('div');
  videoItem.className = 'video-item';
  
  videoItem.innerHTML = `
    <video class="video-content" loop>
      <source src="${video.videoUrl}" type="video/mp4">
    </video>
    <div class="video-overlay">
      <i class="fas fa-play"></i>
    </div>
    <div class="video-info">
      <h3>${video.username}</h3>
      <p>${video.description}</p>
    </div>
    <div class="video-actions">
      <div class="user-profile">
        <i class="fas fa-user"></i>
      </div>
      <div class="action-button">
        <i class="fas fa-heart"></i>
        <span>${video.likes}</span>
      </div>
      <div class="action-button">
        <i class="fas fa-comment-dots"></i>
        <span>${video.comments}</span>
      </div>
      <div class="action-button">
        <i class="fas fa-share"></i>
        <span>${video.shares}</span>
      </div>
    </div>
  `;

  const videoElement = videoItem.querySelector('video');
  const overlay = videoItem.querySelector('.video-overlay');

  const handleVideoClick = () => {
    if (videoElement.paused) {
      videoElement.play()
        .then(() => {
          overlay.classList.add('hidden');
        })
        .catch(error => {
          console.error('Error playing video:', error);
        });
    } else {
      videoElement.pause();
      overlay.classList.remove('hidden');
    }
  };

  overlay.addEventListener('click', handleVideoClick);
  videoElement.addEventListener('click', handleVideoClick);

  return videoItem;
}

function initializeFeed() {
  const container = document.getElementById('video-container');
  
  mockVideos.forEach(video => {
    const videoElement = createVideoElement(video);
    container.appendChild(videoElement);
  });

  // Handle scroll events to play/pause videos
  container.parentElement.addEventListener('scroll', () => {
    const videos = document.querySelectorAll('.video-content');
    const overlays = document.querySelectorAll('.video-overlay');
    
    videos.forEach((video, index) => {
      const rect = video.getBoundingClientRect();
      const visible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      
      if (visible) {
        video.play()
          .then(() => {
            overlays[index].classList.add('hidden');
          })
          .catch(() => {
            overlays[index].classList.remove('hidden');
          });
      } else {
        video.pause();
        overlays[index].classList.remove('hidden');
      }
    });
  });
}

function initializeDiscoverPage() {
  const hashtagGrid = document.getElementById('hashtag-grid');
  const categoryGrid = document.getElementById('category-grid');
  const suggestedGrid = document.getElementById('suggested-grid');

  // Populate hashtags
  mockHashtags.forEach(hashtag => {
    const card = document.createElement('div');
    card.className = 'hashtag-card';
    card.innerHTML = `
      <h3>${hashtag.tag}</h3>
      <p>${hashtag.posts}</p>
      ${hashtag.trending ? '<span class="trending">🔥 Trending</span>' : ''}
    `;
    hashtagGrid.appendChild(card);
  });

  // Populate categories
  mockCategories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
      <h3>${category.icon} ${category.name}</h3>
      <p>${category.posts} posts</p>
    `;
    categoryGrid.appendChild(card);
  });

  // Populate suggested content
  mockSuggested.forEach(content => {
    const card = document.createElement('div');
    card.className = 'suggested-card';
    card.innerHTML = `
      <div class="suggested-thumbnail">
        ${content.thumbnail}
      </div>
      <div class="suggested-info">
        <h3>${content.title}</h3>
        <p>${content.username}</p>
        <div class="stats">
          <span><i class="fas fa-eye"></i> ${content.views}</span>
          <span><i class="fas fa-heart"></i> ${content.likes}</span>
        </div>
      </div>
    `;
    suggestedGrid.appendChild(card);
  });
}

function initializeCreatePage() {
  const createContainer = document.getElementById('create-container');
  if (!createContainer) return;

  const fileInput = document.getElementById('video-upload');
  const previewContainer = document.getElementById('preview-container');
  const dropZone = document.getElementById('drop-zone');
  const filterContainer = document.getElementById('filter-container');
  const soundContainer = document.getElementById('sound-container');
  const cameraBtn = document.getElementById('camera-btn');
  const cameraContainer = document.getElementById('camera-container');
  const cameraPreview = document.getElementById('camera-preview');
  const recordBtn = document.getElementById('record-btn');
  const cameraSwitchBtn = document.getElementById('camera-switch-btn');
  const cameraCloseBtn = document.getElementById('camera-close-btn');

  let mediaRecorder;
  let recordedChunks = [];
  let isRecording = false;
  let stream;
  let facingMode = 'user'; // or 'environment' for back camera

  // Initialize camera functionality
  cameraBtn.addEventListener('click', async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
        audio: true
      });
      
      cameraPreview.srcObject = stream;
      dropZone.style.display = 'none';
      cameraContainer.style.display = 'block';
      
      // Initialize media recorder
      mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const videoURL = URL.createObjectURL(blob);
        
        // Show video preview
        const video = document.createElement('video');
        video.className = 'video-preview';
        video.src = videoURL;
        video.controls = true;
        
        previewContainer.innerHTML = '';
        previewContainer.appendChild(video);
        
        // Show editing options
        cameraContainer.style.display = 'none';
        document.getElementById('edit-container').style.display = 'block';
        
        // Clear recording data
        recordedChunks = [];
      };
      
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Unable to access camera. Please make sure you have granted camera permissions.');
    }
  });

  // Handle recording
  recordBtn.addEventListener('click', () => {
    if (!mediaRecorder) return;
    
    if (!isRecording) {
      mediaRecorder.start();
      isRecording = true;
      recordBtn.classList.add('recording');
      recordBtn.innerHTML = '<i class="fas fa-stop"></i>';
    } else {
      mediaRecorder.stop();
      isRecording = false;
      recordBtn.classList.remove('recording');
      recordBtn.innerHTML = '<i class="fas fa-circle"></i>';
      
      // Stop all tracks
      stream.getTracks().forEach(track => track.stop());
    }
  });

  // Switch camera
  cameraSwitchBtn.addEventListener('click', async () => {
    if (stream) {
      // Stop all tracks
      stream.getTracks().forEach(track => track.stop());
      
      // Toggle facing mode
      facingMode = facingMode === 'user' ? 'environment' : 'user';
      
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode },
          audio: true
        });
        
        cameraPreview.srcObject = stream;
        
        // Reinitialize media recorder with new stream
        mediaRecorder = new MediaRecorder(stream);
      } catch (err) {
        console.error('Error switching camera:', err);
      }
    }
  });

  // Close camera
  cameraCloseBtn.addEventListener('click', () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    cameraContainer.style.display = 'none';
    dropZone.style.display = 'block';
    recordedChunks = [];
    isRecording = false;
  });

  // Initialize other features
  mockFilters.forEach(filter => {
    const filterBtn = document.createElement('button');
    filterBtn.className = 'filter-button';
    filterBtn.innerHTML = `
      <span class="filter-icon">${filter.icon}</span>
      <span class="filter-name">${filter.name}</span>
    `;
    filterContainer.appendChild(filterBtn);
  });

  // Initialize sounds
  mockSounds.forEach(sound => {
    const soundCard = document.createElement('div');
    soundCard.className = 'sound-card';
    soundCard.innerHTML = `
      <div class="sound-info">
        <h4>${sound.title}</h4>
        <p>${sound.artist}</p>
      </div>
      <div class="sound-stats">
        <span>${sound.duration}</span>
        <span>${sound.uses} uses</span>
      </div>
      <button class="use-sound-btn">Use</button>
    `;
    soundContainer.appendChild(soundCard);
  });

  // Handle file selection
  fileInput.addEventListener('change', handleFileSelection);

  // Handle drag and drop
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length) {
      fileInput.files = files;
      handleFileSelection({ target: fileInput });
    }
  });
}

function handleFileSelection(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('video/')) {
    const previewContainer = document.getElementById('preview-container');
    const dropZone = document.getElementById('drop-zone');
    const editContainer = document.getElementById('edit-container');

    // Create video preview
    const video = document.createElement('video');
    video.className = 'video-preview';
    video.src = URL.createObjectURL(file);
    video.controls = true;

    // Clear previous preview
    previewContainer.innerHTML = '';
    previewContainer.appendChild(video);

    // Show editing options
    dropZone.style.display = 'none';
    editContainer.style.display = 'block';

    // Clear recording data
    recordedChunks = [];
  }
}

function initializeInboxPage() {
  const container = document.getElementById('inbox-container');
  if (!container) return;

  // Initialize tabs
  const tabs = container.querySelectorAll('.inbox-tab');
  const messageList = document.getElementById('message-list');
  const notificationList = document.getElementById('notification-list');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      if (tab.dataset.tab === 'messages') {
        messageList.style.display = 'flex';
        notificationList.style.display = 'none';
      } else {
        messageList.style.display = 'none';
        notificationList.style.display = 'flex';
      }
    });
  });

  // Populate messages
  mockMessages.forEach(message => {
    const messageElement = document.createElement('div');
    messageElement.className = `message-item ${message.unread ? 'unread' : ''}`;
    messageElement.innerHTML = `
      <div class="message-avatar">${message.avatar}</div>
      <div class="message-content">
        <div class="message-header">
          <span class="message-username">${message.username}</span>
          <span class="message-time">${message.time}</span>
        </div>
        <div class="message-preview">${message.message}</div>
      </div>
    `;
    messageList.appendChild(messageElement);
  });

  // Populate notifications
  mockNotifications.forEach(notification => {
    const notificationElement = document.createElement('div');
    notificationElement.className = 'notification-item';
    notificationElement.innerHTML = `
      <div class="notification-avatar">${notification.avatar}</div>
      <div class="notification-content">
        <div class="notification-text">
          <strong>${notification.username}</strong> ${notification.action}
        </div>
        <div class="notification-time">${notification.time}</div>
      </div>
      ${notification.actionButton ? 
        `<button class="notification-action">${notification.actionButton}</button>` : 
        ''}
    `;
    notificationList.appendChild(notificationElement);
  });
}

function initializeProfilePage() {
  const container = document.getElementById('profile-container');
  if (!container) return;

  const profileHeader = document.createElement('div');
  profileHeader.className = 'profile-header';
  profileHeader.innerHTML = `
    <div class="profile-avatar">${mockProfileData.avatar}</div>
    <div class="profile-info">
      <h2 class="profile-username">${mockProfileData.displayName}</h2>
      <div class="profile-handle">@${mockProfileData.username}</div>
      <p class="profile-bio">${mockProfileData.bio}</p>
      <div class="profile-stats">
        <div class="stat-item">
          <div class="stat-number">${mockProfileData.followers}</div>
          <div class="stat-label">Followers</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">${mockProfileData.following}</div>
          <div class="stat-label">Following</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">${mockProfileData.likes}</div>
          <div class="stat-label">Likes</div>
        </div>
      </div>
      <div class="profile-actions">
        <button class="profile-btn edit-profile-btn">
          <i class="fas fa-edit"></i> Edit Profile
        </button>
        <button class="profile-btn follow-btn" id="follow-btn">
          ${mockProfileData.isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  `;

  const profileTabs = document.createElement('div');
  profileTabs.className = 'profile-tabs';
  profileTabs.innerHTML = `
    <div class="profile-tab active" data-tab="videos">
      <i class="fas fa-video"></i> Videos
    </div>
    <div class="profile-tab" data-tab="liked">
      <i class="fas fa-heart"></i> Liked
    </div>
    <div class="profile-tab" data-tab="private">
      <i class="fas fa-lock"></i> Private
    </div>
  `;

  const videoGrid = document.createElement('div');
  videoGrid.className = 'video-grid';

  mockProfileData.videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.innerHTML = `
      <video class="video-thumbnail" loop muted>
        <source src="${video.thumbnail}" type="video/mp4">
      </video>
      <div class="video-card-overlay">
        <div class="video-stats">
          <span><i class="fas fa-play"></i>${video.views}</span>
          <span><i class="fas fa-heart"></i>${video.likes}</span>
          <span><i class="fas fa-comment"></i>${video.comments}</span>
        </div>
      </div>
    `;
    videoGrid.appendChild(videoCard);
  });

  // Clear container and append new elements
  container.innerHTML = '';
  container.appendChild(profileHeader);
  container.appendChild(profileTabs);
  container.appendChild(videoGrid);

  // Add tab switching functionality
  const tabs = container.querySelectorAll('.profile-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      if (tab.dataset.tab === 'videos') {
        videoGrid.style.display = 'grid';
      } else {
        videoGrid.style.display = 'none';
        const emptyState = document.createElement('div');
        emptyState.className = 'profile-empty-state';
        emptyState.innerHTML = `
          <i class="fas fa-lock"></i>
          <p>This content is private</p>
        `;
        container.appendChild(emptyState);
      }
    });
  });

  // Add follow button functionality
  const followBtn = container.querySelector('#follow-btn');
  followBtn.addEventListener('click', () => {
    mockProfileData.isFollowing = !mockProfileData.isFollowing;
    followBtn.textContent = mockProfileData.isFollowing ? 'Following' : 'Follow';
    followBtn.style.background = mockProfileData.isFollowing ? '#2a2a2a' : '#ff2d55';
  });
}

function initializeTheme() {
  const storedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(storedTheme);
  
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  
  updateThemeIcon(storedTheme, themeIcon);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    setTheme(newTheme);
    updateThemeIcon(newTheme, themeIcon);
    localStorage.setItem('theme', newTheme);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function updateThemeIcon(theme, icon) {
  if (theme === 'dark') {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}

function handleNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const containers = {
    feed: document.getElementById('feed-container'),
    discover: document.getElementById('discover-container'),
    create: document.getElementById('create-container'),
    inbox: document.getElementById('inbox-container'),
    profile: document.getElementById('profile-container')
  };

  // Set initial active page
  const initialPage = 'discover';
  containers[initialPage].classList.add('container-active');
  document.querySelector(`[data-page="${initialPage}"]`).classList.add('active');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all nav items
      navItems.forEach(nav => nav.classList.remove('active'));
      
      // Add active class to clicked nav item
      item.classList.add('active');

      // Get the page identifier
      const page = item.dataset.page;

      // Hide all containers
      Object.values(containers).forEach(container => {
        if (container) {
          container.classList.remove('container-active');
          container.classList.add('container-inactive');
        }
      });

      // Show selected container
      if (containers[page]) {
        containers[page].classList.remove('container-inactive');
        containers[page].classList.add('container-active');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  initializeFeed();
  initializeDiscoverPage();
  initializeCreatePage();
  initializeInboxPage();
  initializeProfilePage();
  handleNavigation();
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.fa-heart')) {
    const heartIcon = e.target.closest('.fa-heart');
    heartIcon.classList.toggle('fas');
    heartIcon.classList.toggle('far');
    heartIcon.style.color = heartIcon.classList.contains('fas') ? '#ff2d55' : '#fff';
  }
});
