export type CuratorNotes = {
  architecture: string;
  details: string;
  story: string;
};

export type Building = {
  id: string;
  index: number;
  name: string;
  nameLines: [string, string?];
  archive: {
    setNumber: string;
    releaseYear: number;
    ageRating: string;
    pieceCount: number;
    minifigureCount: number;
    includedFigures: string;
    sourceTheme: string;
    collection: string;
    officialUrl: string;
    dimensions: {
      heightCm: number;
      widthCm: number;
      depthCm: number;
    };
  };
  curator: {
    category: string;
    description: string;
    notes: CuratorNotes;
  };
  visual: {
    heroImage: string;
    thumbnailImage: string;
    imagePosition: string;
    imageAlt: string;
    isPlaceholder: boolean;
    backgroundTheme: "sandstone";
  };
};
