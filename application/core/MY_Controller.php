<?php
class MY_Controller extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();

        // Load Header and Footer Partials in
        $this->template->set_partial('header','_partials/header');
        $this->template->set_partial('footer','_partials/footer');

        $this->template->set_layout('default');

    }

}