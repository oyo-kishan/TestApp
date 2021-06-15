package com.example.testintegratereactnativewithandroid;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.facebook.react.ReactActivity;

public class MainActivity extends AppCompatActivity {
    private Button button;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        button=findViewById(R.id.button);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openReactNativeActivity();
            }
        });
    }

    private void openReactNativeActivity(){
        Intent intent=new Intent(this, ReactNativeActivity.class);
        startActivity(intent);
        finish();
    }

}