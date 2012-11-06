<?php
class User extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();

        $this->template->set_layout('default');
    }

    public function index()
    {
        // Build template
        $this->template->build('test');
    }

}