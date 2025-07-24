export interface Course {
    id: number;
    title: string;
    publisher: string;
    imageUrl: string;
    description: string;
    price: string;
}

export interface User {
    name: string;
    email: string;
    avatarUrl: string;
    enrolledCourseIds: number[];
}

export const allCourses: Course[] = [
    {
        id: 1,
        title: 'Guide to beginner programming',
        publisher: 'Universitas Multimedia Nusantara',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
        description: 'A comprehensive guide for those starting their journey in programming. Covers fundamentals of web development, including HTML, CSS, and JavaScript, along with practical projects to build your portfolio.',
        price: 'Rp 750.000'
    },
    {
        id: 2,
        title: 'Paint your creative career',
        publisher: 'Universitas Multimedia Nusantara',
        imageUrl: 'https://images.unsplash.com/photo-1522881193457-31ae824a80a3?q=80&w=2070&auto=format&fit=crop',
        description: 'Unleash your creative potential and learn how to build a successful career in the creative industries. From portfolio building and personal branding to client management and pricing strategies.',
        price: 'Rp 600.000'
    },
    {
        id: 3,
        title: 'Public Speaking Essentials',
        publisher: 'Advanteens Academy',
        imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
        description: 'Master the art of public speaking and deliver presentations with confidence and impact. This course covers everything from structuring your speech and storytelling to managing stage fright and engaging your audience.',
        price: 'Rp 500.000'
    },
    {
        id: 4,
        title: 'Upcoming Multimedia Nusantara',
        publisher: 'Universitas Multimedia Nusantara',
        imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop', // Re-using image as it was in original
        description: 'Get a sneak peek into the future of multimedia with this exciting upcoming course. Explore cutting-edge topics and prepare for the next wave of digital innovation. Full details coming soon!',
        price: 'Rp 550.000'
    }
];

export const mockUser: User = {
    name: 'Budi Doremi',
    email: 'username@gmail.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=budi',
    enrolledCourseIds: [1, 2, 3]
};