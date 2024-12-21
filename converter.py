from pathlib import Path
from PIL import Image

folder_beauty: Path = Path("assets/img/beauty")
folder_tatoo: Path = Path("assets/img/tattoo")

def load_files(folder: Path) -> list:
    """Load files"""
    files: list = []
    for file in Path(folder).iterdir():
        if file.is_file() and (file.suffix == ".jpeg" or file.suffix == ".jpg"):
            files.append(file)
    return files

def convertor(file_list: list, kam: Path) -> None:
    """Convertor"""
    for file in file_list:
        with Image.open(file) as jpeg_image:
            temp = file.stem
            jpeg_image.save(kam / f"{temp}.webp", format="WEBP", quality=80)
        print(f"{temp} is converted to webp")


def main(files: Path) -> None:
    folder: list = load_files(files)
    convertor(folder, files)


if __name__ == '__main__':
    main(folder_beauty)
    print("Done")
