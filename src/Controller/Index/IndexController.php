<?php

namespace App\Controller\Index;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/app/")
     *
     * @return Response
     */
    public function homePage()
    {
        return $this->render('base.html.twig');
        //return new Response('What a bewitching controller we have conjured!');
    }
}