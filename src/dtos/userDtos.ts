export interface UserDTO {
  id?: number;
  username?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  name?: string;
  biography?: string | null;
  profession?: string | null;
  is_verified?: boolean;
  is_founder?: boolean;
  createdAt?: string;
  updatedAt?: string;
  avatar?: {
    id?: number;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: {
      small?: ImageFormatDTO;
      medium?: ImageFormatDTO;
      thumbnail?: ImageFormatDTO;
    };
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url?: string;
    previewUrl?: string | null;
    provider?: string;
    provider_metadata?: {
      public_id?: string;
      resource_type?: string;
    };
    createdAt?: string;
    updatedAt?: string;
  };
  code_invites?: InviteDTO[];
  user_host?: null | string;
  q_rcodes?: QRCodeDTO[];
  token?: string;
}

export interface ImageFormatDTO {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: string | null;
  size?: number;
  width?: number;
  height?: number;
  provider_metadata?: {
    public_id?: string;
    resource_type?: string;
  };
}

export interface InviteDTO {
  id?: number;
  id_invite?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface QRCodeDTO {
  id?: number;
  type?: string;
  qrcode_url?: string;
  createdAt?: string;
  updatedAt?: string;
}
