interface member {
	name: string;
	subtitle: string;
	img?: string;
	secImg?: string;
	socialLinks?: {
		linkedin?: string;
		facebook?: string;
		github?: string;
		stackoverflow?: string;
	};
}

interface sitedataInterface {
	master: {
		teamBrand: string;
		teamName: string;
	};
	members: member[];
}

const sitedata: sitedataInterface = {
	master: {
		teamBrand: "LEAP Developers",
		teamName: "LEAP",
	},
	members: [
		{
			name: "Ashish Verma",
			subtitle: "2015-2019",
			img: "https://media-exp1.licdn.com/dms/image/C5603AQENjNZ0sLd9NA/profile-displayphoto-shrink_800_800/0/1516562870888?e=1626912000&v=beta&t=073EVg7Jve63USR3-5C8bkWl_zmupiNyigDOheC2vmY",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/ashishverma3202/",
				facebook: "https://www.facebook.com/ashishverma.ashish",
			},
		},
		{
			name: "Pranjal Saxena",
			subtitle: "2016-Ongoing",
			img: "https://media-exp1.licdn.com/dms/image/C4E03AQHxvVWEVMZ8hQ/profile-displayphoto-shrink_800_800/0/1517446525776?e=1626912000&v=beta&t=4YtcFW_GXAzBa7787cpwQOFb7ddhCjUNRGDQ6q8MlMM",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/pranjal-saxena-754989a6/",
				facebook: "https://www.facebook.com/pranjal.saxena.73",
			},
		},
		{
			name: "Shivam Sharma",
			subtitle: "2017-2021",
			img: "https://avatars.githubusercontent.com/u/32218762?v=4",
			secImg: "https://i.ibb.co/Ss0tS8Q/IMG-20180810-WA0039.jpg",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/shivams136/",
				facebook: "https://www.facebook.com/shivams136",
				github: "https://github.com/ShivamS136",
				stackoverflow: "https://stackoverflow.com/users/8494462/shivam-sharma",
			},
		},
		{
			name: "Shubham Chawla",
			subtitle: "2018-Ongoing",
			img: "https://media-exp1.licdn.com/dms/image/C5603AQFroEBwF_aO5Q/profile-displayphoto-shrink_800_800/0/1590948117301?e=1627516800&v=beta&t=J8-hX_ZtE6yq0J5uQM5aEQFDkQyxkFoaIVEnn6c8aoU",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/shubham-chawla/",
			},
		},
		{
			name: "Varnika Singhal",
			subtitle: "2018-Ongoing",
			img: "https://media-exp1.licdn.com/dms/image/C5103AQE83QlMYRjCwg/profile-displayphoto-shrink_800_800/0/1517412213059?e=1627516800&v=beta&t=jNeXtRveLaRO7xCCQFt46gwm9KluwqXBo0yv7C09By8",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/varnika-singhal-b8453a143/",
			},
		},
		{
			name: "Kashish Goyal",
			subtitle: "2018-Ongoing",
			img: "https://media-exp1.licdn.com/dms/image/C4E03AQHE6sHH3zDJpA/profile-displayphoto-shrink_800_800/0/1589343585717?e=1627516800&v=beta&t=VElWs65x9C7PmphXdhf6wUcSE7gt3Yn5-yuZQtIfxUM",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/kashish-g-24566512a/",
			},
		},
		{
			name: "Shubhangi Rastogi",
			subtitle: "2018-Ongoing",
			img: "https://media-exp1.licdn.com/dms/image/C5103AQHNEQWmZ3uKSQ/profile-displayphoto-shrink_800_800/0/1517422252946?e=1627516800&v=beta&t=TTov3YSdXz7VG6sqa7UXkIS51sH18I5XI7A4Sl8WIPI",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/shubhangi-rastogi-49b83010a/",
			},
		},
	],
};

export default sitedata;
