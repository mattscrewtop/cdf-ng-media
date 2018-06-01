import { CdfRootModel } 			from './cdf-root.model';
import { CdfVideoModel } 			from './cdf-video.model';

export class CdfMediaModel extends CdfRootModel
{
	ImageUri: string;
	ImageHomeUri: string;
	YouTubeId: string;
	VideoList: CdfVideoModel[] = [];
	HasImage: boolean = false;
	HasVideo: boolean = false;

	constructor(id?: string, type?: string, title?:string, description?: string, imageUrl?: string, youTubeId?:string, videoList?: CdfVideoModel[], body?: string, imageHomeUrl?: string)
	{
		super(id, type, title, description, body);

		if (imageUrl)
		{
			this.ImageUri = imageUrl;
			this.HasImage = true;
		}

		if (imageHomeUrl)
		{
			this.ImageHomeUri = imageHomeUrl;
			this.HasImage = true;
		}

		if (youTubeId)
		{
			this.YouTubeId = youTubeId;
			this.HasVideo = true;
		}

		if (videoList)
		{
			this.VideoList = videoList;
			this.HasVideo = true;
		}
	}

	SetImage(uri:string)
	{
		this.ImageUri = uri;
		this.HasImage = true;
	};

	SetHomeImage(uri:string)
	{
		this.ImageHomeUri = uri;
		this.HasImage = true;
	};

	SetYouTubeId(youTubeId: string)
	{
		this.YouTubeId = youTubeId;
		this.HasVideo = true;
	};
}