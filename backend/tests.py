# from rest_framework.test import APIClient
# from django.test import TestCase

# # Create your tests here.
# # run ./manage.py test to test.
# from django.contrib.auth import get_user_model
# from .models import Tweet
# User = get_user_model()


# class TweetTestCase(TestCase):
#     def setUp(self):
#         self.user = User.objects.create_user(
#             username='IamANewUser', password='newPassWord')
#         Tweet.objects.create(content='first Tweet.', user=self.user)
#         Tweet.objects.create(content='second Tweet.', user=self.user)
#         Tweet.objects.create(content='third Tweet.', user=self.user)
#         # current number of tweets.

#         self.user2 = User.objects.create_user(
#             username='IamANewUser2', password='newPassWord2')
#         Tweet.objects.create(content='first tweet of user2', user=self.user2)
#         self.currentCount = Tweet.objects.all().count()

#     def test_user_create(self):
#         user = User.objects.get(username='IamANewUser')
#         self.assertEqual(self.user.username, 'IamANewUser')

#     def test_post_create(self):
#         newTweet = Tweet.objects.create(content='new tweet.', user=self.user)
#         self.assertEqual(newTweet.id, 5)
#         self.assertEqual(newTweet.user, self.user)
#         self.assertEqual(newTweet.content, 'new tweet.')

#     def get_client(self):
#       #     test_api_login
#         client = APIClient()
#         client.login(username=self.user.username, password='newPassWord')
#         return client

#     def get_client2(self):
#       #     test_api_login
#         client = APIClient()
#         client.login(username=self.user2.username, password='newPassWord2')
#         return client

#     def test_posts_list(self):
#         client = self.get_client()
#         response = client.get('/posts/')
#       #   print(response, response.json())
#         self.assertEqual(response.status_code, 200)
#         self.assertEqual(len(response.json()), 4)

#     def test_actions_like_and_unlike(self):
#         client = self.get_client()
#         id_value = 1
#         client.post('/posts/actions/', {'id': id_value, 'action': 'like'})
#         response = client.get('/posts/')
#         self.assertEqual(response.status_code, 200)
#         for i in response.json():
#             if i.get('id') == id_value:
#                 self.assertEqual(len(i.get('like')), 1)
#         client.post('/posts/actions/', {'id': id_value, 'action': 'unlike'})
#         response = client.get('/posts/')
#         for i in response.json():
#             if i.get('id') == id_value:
#                 self.assertEqual(len(i.get('like')), 0)

#     def test_actions_reTweet(self):
#         client = self.get_client()
#         id_value = 1
#         postResponse = client.post(
#             '/posts/actions/', {'id': id_value, 'action': 'retweet'})
#         response = client.get('/posts/')
#         self.assertEqual(postResponse.status_code, 201)
#         self.assertTrue(postResponse.json().get('is_retweet'))
#         # to make sure that it is a new tweet should have diffrent id.
#         self.assertNotEqual(id_value, postResponse.json().get("id"))
#         print(self.currentCount, postResponse.json().get("id"))
#         # the new tweet should have an id = prevuse number of tweets +1
#         self.assertEqual(self.currentCount+1, postResponse.json().get("id"))

#     # def test_api_create(self):
#     #     data = {"content": "create a new post"}
#     #     client = self.get_client()
#     #     response = client.post('posts/create/', data)
#     #     print(response)
#     #     self.assertEqual(response.status_code, 201)
#     #     # newTweetId = response.json().get('id')
#     #     # self.assertEqual(self.currentCount+1, newTweetId)

#     def test_get_post_by_id(self):
#         client = self.get_client()
#         response = client.get('/posts/1')
#         self.assertEqual(response.status_code, 200)
#         self.assertEqual(response.json().get('id'), 1)

#     def test_delete_post(self):
#         client = self.get_client()
#         response = client.delete('/posts/1/delete/')
#         self.assertEqual(response.status_code, 200)
#         response = client.delete('/posts/1/delete/')
#         self.assertEqual(response.status_code, 404)

#     def test_who_can_delete_post(self):
#         client = self.get_client()
#         # get_client() can't delete the 4th post
#         response = client.delete('/posts/4/delete/')
#         self.assertEqual(response.status_code, 401)
#         # get_client2() can delete tht 4th post
#         client2 = self.get_client2()
#         response = client2.delete('/posts/4/delete/')
#         self.assertEqual(response.status_code, 200)
