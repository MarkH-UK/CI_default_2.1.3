<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Files_folders {


	function __construct()
	{
        $obj =& get_instance();

        $this->files_root = 'media';
        $this->files_area = '';
        $this->current_id = '';


	}
	
    public function modify_id($id)
    {
        $this->current_id = $id;
    }
    public function modify_path($path)
    {
        $this->files_area = $path;
    }

	public function check_folder($folder)
	{


        $file_path = $this->files_root . '/'.$this->files_area.'/' . $this->current_id . '/' . $folder;

        if(!is_dir($file_path))
        {
            mkdir($file_path, 0777, TRUE);

        }

        return $file_path;

	}

}
?>