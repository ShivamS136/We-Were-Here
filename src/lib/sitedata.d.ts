interface TypeSocialLinks {
	linkedin?: string;
	facebook?: string;
	github?: string;
	stackoverflow?: string;
}

interface TypeMember {
	name: string;
	subtitle: string;
	img?: string;
	secImg?: string;
	socialLinks?: TypeSocialLinks;
}
