//
//  FromTheHeart.swift
//
//  Created by Author on 12/13/20.
//

import UIKit

class FromTheHeart: UIViewController {

    // MARK: - Properties
    let heartImageView: UIImageView = {
        let imageView = UIImageView(image: UIImage(named:"heart"))
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.contentMode = .scaleAspectFit
        imageView.tintColor = .red
        return imageView
    }()

    let titleLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.systemFont(ofSize: 24, weight: .heavy)
        label.text = "From the Heart"
        label.textColor = .black
        label.textAlignment = .center
        return label
    }()

    let textView: UITextView = {
        let textView = UITextView()
        textView.translatesAutoresizingMaskIntoConstraints = false
        textView.text = "This message comes from the heart, for all those who know me. This is not just another letter, but a genuine caring thought. I want to thank you for everything that you have done, for always being right there, when I needed someone. The acts of kindness and love, that you constantly provide, will always be remembered and treasured deep down inside. You have helped me in so many ways, with smiles and gentle words, bringing joy and peace to my life, like a soothing breeze in a bird. There is no one else like you, so generous and true. I thank you from the bottom of my heart, for being so wonderful…for being you."
        textView.textColor = .black
        textView.font = UIFont.systemFont(ofSize: 16)
        textView.backgroundColor = .clear
        textView.isEditable = false
        textView.isSelectable = false
        return textView
    }()

    let sendButton: UIButton = {
        let button = UIButton(type: .system)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.setTitle("Send from the heart", for: .normal)
        button.titleLabel?.font = UIFont.systemFont(ofSize: 18, weight: .heavy)
        button.setTitleColor(.red, for: .normal)
        button.addTarget(self, action: #selector(handleSend), for: .touchUpInside)
        return button
    }()

    // MARK: - Lifecycle
    override func viewDidLoad() {
        super.viewDidLoad()
        configureUI()
    }

    // MARK: - Selectors
    @objc func handleSend() {
        // send message
    }

    // MARK: - Helpers
    func configureUI() {
        view.backgroundColor = .white

        view.addSubview(heartImageView)
        view.addSubview(titleLabel)
        view.addSubview(textView)
        view.addSubview(sendButton)

        NSLayoutConstraint.activate([
            heartImageView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 20),
            heartImageView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            heartImageView.heightAnchor.constraint(equalToConstant: 200),
            heartImageView.widthAnchor.constraint(equalToConstant: 200),

            titleLabel.topAnchor.constraint(equalTo: heartImageView.bottomAnchor, constant: 30),
            titleLabel.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20),
            titleLabel.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -20),
            titleLabel.heightAnchor.constraint(equalToConstant: 44),

            textView.topAnchor.constraint(equalTo: titleLabel.bottomAnchor, constant: 20),
            textView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20),
            textView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -20),
            textView.bottomAnchor.constraint(equalTo: sendButton.topAnchor, constant: -20),

            sendButton.heightAnchor.constraint(equalToConstant: 44),
            sendButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20),
            sendButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -20),
            sendButton.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: -20)
        ])
    }
}