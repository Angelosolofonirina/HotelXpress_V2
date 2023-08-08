<?php

namespace App\Controller;

use App\Entity\UserType;
use App\Repository\UserTypeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route("/user/type")]
class UserTypeController extends AbstractController
{

    private UserTypeRepository $repository;
    private EntityManagerInterface $manager;

    public function __construct(UserTypeRepository $repository, EntityManagerInterface $manager)
    {
        $this->repository = $repository;
        $this->manager = $manager;
    }


    #[Route("/", name: "user.type.all", methods: ["GET"])]
    public function getAllUserType(): JsonResponse
    {
        return $this->json(
            $this
                ->repository
                ->showAll()
        );
    }

    #[Route("/user", name: "user.type.user", methods: ["GET"])]
    public function getUserWithType(): JsonResponse
    {
        return $this->json(
            $this
                ->repository
                ->findUserWithType()
        );
    }

    #[Route("/{id<\d+>}", name: "user.type.id", methods: ["GET"])]
    public function showUserTypeById(int $id): JsonResponse
    {
        return $this->json(
            $this
                ->repository
                ->findByIdUserType($id)
        );
    }


    #[Route("/update", name: "room.update", methods: ["PUT"])]
    public function updateUserType(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        return $this->json(
            $this
                ->repository
                ->update(
                    $data["ut_id"],
                    $data["ut_userType"]
                )
        );
    }

    #[Route("/delete/{id<\d+>}", name: "user.type.delete", methods: ["DELETE"])]
    public function deleteById(int $id): JsonResponse
    {
        return $this->json(
            $this
                ->repository
                ->deleteById($id)
        );
    }

    #[Route("/add", name: "user.type.add", methods: ["POST"])]
    public function addUserType(Request $request): JsonResponse
    {
        $usertype = new UserType();
        $post = json_decode($request->getContent(), true);
        $usertype->setUserType($post["ut_userType"]);
        $this->manager->persist($usertype);
        $this->manager->flush();
        return $this->json(
            ["message" => "User type created successfully"]
        );
    }
}